import mongoose from 'mongoose';

export type NewsType = {
  _id: string;
  title: string;
  from?: string;
  tag?: string;
  image_url?: string;
  published: boolean;
  created_at: string;
  updated_at: string;
};

const NewsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    from: { type: String, required: false },
    tag: { type: String, required: false },
    image_url: { type: String, required: false },
    published: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  },
  { collection: 'news' }
);

export default mongoose.models.News || mongoose.model('News', NewsSchema);
