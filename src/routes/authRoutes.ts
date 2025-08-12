import express from 'express';
import { login, createAdmin } from '../controllers/authController';

const router = express.Router();

router.post('/login', login); // done tested
router.post('/create-admin', createAdmin); // done tested

export default router;
