import { Router } from 'express';
const router = Router();

import { signUp, signIn } from '../controllers/usuario.controller';

router.post('/signUp', signUp);
router.post('/signIn', signIn);

export default router;
