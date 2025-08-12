import { Request, Response } from 'express';
import PortfolioItem from '../models/PortfolioItem';

export const getAllPortfolio = async (_req: Request, res: Response) => {
  try {
    const items = await PortfolioItem.find().sort({ displayOrder: 1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getPortfolioById = async (req: Request, res: Response) => {
  try {
    const item = await PortfolioItem.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Portfolio item not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const createPortfolio = async (req: Request, res: Response) => {
  try {
    const newItem = new PortfolioItem(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error });
  }
};

export const updatePortfolio = async (req: Request, res: Response) => {
  try {
    const updatedItem = await PortfolioItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ message: 'Portfolio item not found' });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error });
  }
};

export const deletePortfolio = async (req: Request, res: Response) => {
  try {
    const deletedItem = await PortfolioItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Portfolio item not found' });
    res.json({ message: 'Portfolio item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
