import { Router } from 'express';
import { body } from 'express-validator';
import BoardController from '../../controller/board.controller.js';
const router = Router();

const { list, write, update, baorddelete } = BoardController;

router.get('/list', list);
router.post(
  '/write',
  body('title').isLength({ min: 1 }).withMessage('title값이'),
  body('content').isLength({ min: 1 }).withMessage('content 값이'),
  write
);
router.put(
  '/update',
  body('title').isLength({ min: 1 }).withMessage('title값이'),
  body('content').isLength({ min: 1 }).withMessage('content 값이'),
  update
);
router.delete(
  '/delete',
  body('id').isLength({ min: 1 }).withMessage('id값이'),
  baorddelete
);

export default router;
