import type { Request, Response } from 'express';
import QuestionnaireResponse from '../models/QuestionnaireResponse';

// POST /api/responses
export const submitResponse = async (req: Request, res: Response) => {
  try {
    const newResponse = new QuestionnaireResponse(req.body);
    await newResponse.save();
    res.status(201).json({ message: 'Response submitted successfully', data: newResponse });
  } catch (error) {
    res.status(500).json({ message: 'Error saving response', error });
  }
};

// GET /api/responses
export const getResponses = async (req: Request, res: Response) => {
  try {
    const responses = await QuestionnaireResponse.find().sort({ createdAt: -1 });
    res.status(200).json(responses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching responses', error });
  }
};

// GET /api/stats
export const getStats = async (req: Request, res: Response) => {
  try {
    const totalResponses = await QuestionnaireResponse.countDocuments();
    
    // Aggregate some basic stats as an example
    const roles = await QuestionnaireResponse.aggregate([
      { $group: { _id: "$profil.role", count: { $sum: 1 } } }
    ]);
    
    const experiences = await QuestionnaireResponse.aggregate([
      { $group: { _id: "$profil.experience", count: { $sum: 1 } } }
    ]);

    const levels = await QuestionnaireResponse.aggregate([
      { $group: { _id: "$conferences.level", count: { $sum: 1 } } }
    ]);

    const prices = await QuestionnaireResponse.aggregate([
      { $group: { _id: "$tickets.max_price", count: { $sum: 1 } } }
    ]);

    res.status(200).json({
      totalResponses,
      roles,
      experiences,
      levels,
      prices
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stats', error });
  }
};
