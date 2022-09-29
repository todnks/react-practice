import pool from '../database/index.js';

export default class MemberModel {
  static async signup({ id, password, name }) {
    const rows = await pool.query(
      `
      INSERT into member set
      userid = ?,
      password = ?,
      name = ?,
      registerDate = NOW(),
      loginDate = NOW()
    `,
      [id, password, name]
    );
    return rows;
  }

  static async findMember(id) {
    const [rows] = await pool.query(`SELECT * FROM member where userid = ?`, [
      id,
    ]);

    return rows;
  }

  static async login({ id, password }) {
    const [rows] = await pool.query(
      `
      SELECT * FROM member where id = ? and password = ?
      `,
      [id, password]
    );
    console.log(rows);
    return rows;
  }
}
