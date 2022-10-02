import boardModel from '../model/board.model.js';
import { validationResult } from 'express-validator';

export default class BoardController {
  static async list(req, res) {
    const list = await boardModel.list();
    res.json(list);
  }

  static async write(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (!req.session.user) {
      return res.json({ errors: '로그인후에 접근' });
    }
    await boardModel.write({ ...req.session.user, ...req.body });
    res.json(true);
  }

  static async update(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    if (!req.session.user) {
      return res.json({ errors: '로그인후에 접근' });
    }
    await boardModel.update({ ...req.session.user, ...req.body });
    res.json(true);
  }
  static async baorddelete(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    if (!req.session.user) {
      return res.json({ errors: '로그인후에 접근' });
    }
    await boardModel.delete({ ...req.session.user, ...req.body });
    res.json(true);
  }
}
