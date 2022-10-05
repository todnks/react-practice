import { Router } from 'express';
import { body } from 'express-validator';
import BoardController from '../../controller/board.controller.js';
const router = Router();

const { list, write, update, boarddelete, boardView } = BoardController;

router.get('/list', list);
router.get('/view', boardView);
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
router.delete('/delete', boarddelete);

export default router;
