import pool from '../database/index.js';

export default class BoardModel {
  static async list() {
    const rows = await pool.query(
      `
      SELECT * FROM board 
      `
    );
    return rows;
  }
  static async board({ id }) {
    const [rows] = await pool.query(
      `
      SELECT * FROM board where id = ?
      `,
      [id]
    );
    return rows;
  }
  static async write({ name, id, title, content }) {
    const rows = await pool.query(
      `
      INSERT into board set
      writer = ?,
      userId = ?,
      title = ?,
      content = ?,
      registerDate = NOW()
    `,
      [name, id, title, content]
    );
    return rows;
  }

  static async update({ title, content, id, idx }) {
    const rows = await pool.query(
      `
      UPDATE board set
      title = ?,
      content = ?,
      updateDate= NOW()
      where userId = ? and id = ?
    `,
      [title, content, id, idx]
    );
    return rows;
  }

  static async delete({ userId, id }) {
    const rows = await pool.query(
      `delete from board where userId = ? and id = ?`,
      [userId, id]
    );
    return rows;
  }
}
