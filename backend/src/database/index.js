import mariadb from 'mariadb';
const pool = mariadb.createPool({
  host: 'localhost',
  port: 3306,
  user: 'user',
  password: '1234',
  database: 'react',
});

export default pool;
