import mongoose, { Schema, Document } from 'mongoose';

export interface IPortfolioItem extends Document {
  title: string;
  category: string;
  client?: string;
  description?: string;
  thumbnailUrl: string;
  videoUrl?: string;
  featured: boolean;
  displayOrder: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}

const PortfolioItemSchema: Schema<IPortfolioItem> = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    client: { type: String },
    description: { type: String },
    thumbnailUrl: { type: String, required: true },
    videoUrl: { type: String },
    featured: { type: Boolean, default: false },
    displayOrder: { type: Number, default: 0 },
    deletedAt: { type: Date, default: null }
  },
  { timestamps: true }
);

export default mongoose.model<IPortfolioItem>('PortfolioItem', PortfolioItemSchema);
