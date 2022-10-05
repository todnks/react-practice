import MemberModel from '../model/member.model.js';
import { validationResult } from 'express-validator';
import bcrypt, { hash } from 'bcrypt';

const saltRounds = 10;

export default class MemberController {
  static async signup(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const duplicateMember = await MemberModel.findMember(req.body.id);
    if (duplicateMember) {
      return res.status(400).json({ errors: 'id 겹침' });
    }

    const hashPassword = await new Promise((resolver) =>
      bcrypt.hash(req.body.password, saltRounds, (err, hash) => resolver(hash))
    );

    await MemberModel.signup({ ...req.body, password: hashPassword });
    res.json(true);
  }
  static async login(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const findMember = await MemberModel.findMember(req.body.id);
    if (
      !findMember ||
      !bcrypt.compareSync(req.body.password, findMember.password)
    ) {
      res.json(false);
      return;
    }
    req.session.user = { ...findMember };
    req.session.save(() => {
      res.send(true);
    });
  }
  static async logout(req, res) {
    if (!req.session.user) {
      res.json({
        error: '로그인 되지 않음',
      });
      return;
    }
    req.session.destroy(() => {
      req.session;
    });
    res.json(true);
  }
  static async memberInfo(req, res) {
    if (!req.session.user) {
      res.json(null);
      return;
    }
    const findMember = await MemberModel.findMember(req.session.user.userId);
    res.json(findMember);
  }
}
