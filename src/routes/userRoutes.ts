import { Router } from 'express';
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from './../controllers/userController';

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

router.get('/**', (_, res) => { res.status(404).json({ message: 'Not Found' }) });

export default router;
