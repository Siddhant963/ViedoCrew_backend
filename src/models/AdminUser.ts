import mongoose, { Schema, Document } from 'mongoose';

export interface IAdminUser extends Document {
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const AdminUserSchema: Schema<IAdminUser> = new Schema(
  {
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true },
    name: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model<IAdminUser>('AdminUser', AdminUserSchema);
