import boardModel from '../model/board.model.js';
import { validationResult } from 'express-validator';

export default class BoardController {
  static async list(req, res) {
    const list = await boardModel.list();
    res.json(list);
  }
  static async boardView(req, res) {
    const list = await boardModel.board({ ...req.query });
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
    const { title, content, idx } = req.body;

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (!req.session.user) {
      return res.json({ errors: '로그인후에 접근' });
    }

    const { id } = req.session.user;
    const boardinfo = await boardModel.board({ ...req.body, id: idx });

    if (boardinfo.userId !== id) {
      return res.status(400).send({ error: '잘못된 접근입니다 ' });
    }

    await boardModel.update({ ...req.session.user, title, content, idx });
    res.json(true);
  }
  static async boarddelete(req, res) {
    if (!req.session.user) {
      return res.json({ errors: '로그인후에 접근' });
    }
    const { id } = req.session.user;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const boardinfo = await boardModel.board(req.query);
    if (req.session.userid !== boardinfo.userid) {
      return res.status(400).send({ error: '잘못된 접근입니다 ' });
    }

    await boardModel.delete({ userId: id, id: req.query.id });
    res.json(true);
  }
}
