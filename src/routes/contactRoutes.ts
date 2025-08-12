import express from 'express';
import {
  submitContact,
  getAllContacts,
  updateContactStatus
} from '../controllers/contactController';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

// Public
router.post('/', submitContact); // done tested

// Protected
router.get('/', protect, getAllContacts); //done tested
router.put('/:id', protect, updateContactStatus); // done tested

export default router;
