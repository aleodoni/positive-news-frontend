import mongoose from 'mongoose';

export type InfoType = {
  title: string;
  description: string;
  by: string;
};

const InfoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    by: { type: String, required: true },
  },
  { collection: 'info' }
);

export default mongoose.models.Info || mongoose.model('Info', InfoSchema, 'info');
