import mongoose, { Schema, Document } from 'mongoose';

export interface IQuestionnaireResponse extends Document {
  profil: {
    role: string;
    experience: string;
    context: string[];
    prior_larafest: string;
  };
  interest: {
    attend: string;
    expectation: string[];
    accompany: string;
  };
  conferences: {
    topics: string[];
    level: string;
    format: string[];
    absolute_topic: string;
  };
  speakers: {
    invited_speaker: string;
    origin: string[];
    intervene: string;
    theme_proposal: string;
  };
  organization: {
    duration: string;
    day: string[];
    location: string;
    services: string[];
    food_influence: string;
  };
  tickets: {
    ready_to_buy: string;
    max_price: string;
    ticket_type: string;
    payment_method: string[];
  };
  blockers: {
    preventing_elements: string[];
    facilitating_solution: string;
  };
  communication: {
    info_channels: string[];
    when_program: string;
    opening_notif: string;
  };
  partners: {
    recruitment_space: string;
    discover_startups: string;
    company_support: string;
  };
  suggestions: {
    success_criteria: string;
    activity_idea: string;
    remarks: string;
  };
  createdAt: Date;
}

const QuestionnaireResponseSchema: Schema = new Schema({
  profil: { type: Schema.Types.Mixed, default: {} },
  interest: { type: Schema.Types.Mixed, default: {} },
  conferences: { type: Schema.Types.Mixed, default: {} },
  speakers: { type: Schema.Types.Mixed, default: {} },
  organization: { type: Schema.Types.Mixed, default: {} },
  tickets: { type: Schema.Types.Mixed, default: {} },
  blockers: { type: Schema.Types.Mixed, default: {} },
  communication: { type: Schema.Types.Mixed, default: {} },
  partners: { type: Schema.Types.Mixed, default: {} },
  suggestions: { type: Schema.Types.Mixed, default: {} },
}, { timestamps: true });

export default mongoose.model<IQuestionnaireResponse>('QuestionnaireResponse', QuestionnaireResponseSchema);
