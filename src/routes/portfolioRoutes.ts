import express from 'express';
import {
  getAllPortfolio,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio
} from '../controllers/portfolioController';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

// Public
router.get('/', getAllPortfolio); // done tested
router.get('/:id', getPortfolioById); // done tested

// Protected
router.post('/', protect, createPortfolio); // done tested
router.put('/:id', protect, updatePortfolio); //done tested
router.delete('/:id', protect, deletePortfolio); // done tested

export default router;
