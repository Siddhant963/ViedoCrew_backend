import express from 'express';
import multer from 'multer';
import path from 'path';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({
  storage,
  fileFilter(_req, file, cb) {
    const fileTypes = /jpeg|jpg|png|mp4|mov|avi/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
});

router.post('/image', protect, upload.single('image'), (req, res) => {
  res.json({ filePath: `/uploads/${req.file?.filename}` });
}); // done tested

router.post('/video', protect, upload.single('video'), (req, res) => {
  res.json({ filePath: `/uploads/${req.file?.filename}` });
}); // done tested

export default router;
