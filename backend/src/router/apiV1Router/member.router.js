import { Router } from 'express';
import { body } from 'express-validator';

import MemberController from '../../controller/member.controller.js';
const router = Router();

const { signup, login, logout } = MemberController;

router.post(
  '/signup',
  body('id').isLength({ min: 4, max: 20 }).withMessage('id 값이'),
  body('password').isLength({ min: 6 }).withMessage('pw 값이'),
  body('name').isLength({ min: 5 }).withMessage('name 값이'),
  signup
);
router.get(
  '/login',
  body('id').isLength({ min: 4, max: 20 }).withMessage('id 값이'),
  body('password').isLength({ min: 6 }).withMessage('pw 값이'),
  login
);
router.get('/logout', logout);

export default router;
