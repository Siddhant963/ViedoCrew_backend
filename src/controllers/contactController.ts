import { Request, Response } from 'express';
import ContactInquiry from '../models/ContactInquiry';

export const submitContact = async (req: Request, res: Response) => {
  try {
    const inquiry = new ContactInquiry(req.body);
    await inquiry.save();
    res.status(201).json({ success: true, inquiry });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Invalid data', error });
  }
};

export const getAllContacts = async (_req: Request, res: Response) => {
  try {
    const contacts = await ContactInquiry.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateContactStatus = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const {status} = req.body;
    const updatedContact = await ContactInquiry.findByIdAndUpdate(id, {status}, {new: true});
    if(!updatedContact) {
      return res.status(404).json({message: 'Contact not found'})
    }
    res.json({success: true, updatedContact})
  }
  catch (error) {
    res.status(500).json({message: 'Server error', error})
  }
}
