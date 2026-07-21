import express from 'express';
import { submitResponse, getResponses, getStats } from '../controllers/responseController';
import type { Request, Response, NextFunction } from 'express';
const { Router } = express;

const router = Router();

// Middleware to check admin password
const adminAuth = (req: Request, res: Response, next: NextFunction) => {
  const password = req.headers['x-admin-password'];
  const expectedPassword = process.env.ADMIN_PASSWORD || 'LARAFEST2026';
  
  if (password === expectedPassword) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized: Invalid admin password' });
  }
};

router.post('/responses', submitResponse);
router.get('/responses', adminAuth, getResponses);
router.get('/stats', adminAuth, getStats);

export default router;
