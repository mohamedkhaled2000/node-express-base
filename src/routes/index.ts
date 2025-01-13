import { Router } from 'express';
import userRoutes from './userRoutes';
import gameRoutes from './gameRoutes';
import authRoutes from './authRoutes';

const router = Router();

router.use('/users', userRoutes);
router.use('/games', gameRoutes);
router.use('/auth', authRoutes)

router.get('**', (_, res) => { res.status(404).json({ message: 'Not Found' }) });

export default router;
