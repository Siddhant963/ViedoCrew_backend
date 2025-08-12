import { Request, Response } from 'express';

export const handleImageUpload = (req: Request, res: Response) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded' });
  const url = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  return res.json({ success: true, url });
};

export const handleVideoUpload = handleImageUpload;
