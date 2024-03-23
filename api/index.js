const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQLクライアントの設定
const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'pc_specs_db',
  password: 'password',
  port: 5432,
});

app.use(express.json());
app.use(cors()); // CORSを許可する

// ユーザーごとに所有するPC情報を取得するエンドポイント
app.get('/api/users/pcs', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT users.name AS user_name, pc_specs.*
      FROM users
      JOIN pc_specs ON users.id = pc_specs.user_id
      ORDER BY users.name
    `);

    // レスポンス用のデータ構造を準備
    const response = rows.reduce((acc, row) => {
      // ユーザー名が既にキーとして存在する場合は、その配列に追加
      if (!acc[row.user_name]) {
        acc[row.user_name] = [];
      }
      acc[row.user_name].push({
        id: row.id,
        cpu: row.cpu,
        gpu: row.gpu,
        os: row.os,
        memory_gb: row.memory_gb,
        ssd_gb: row.ssd_gb
      });
      return acc;
    }, {});

    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// ユーザーを追加するエンドポイント
app.post('/api/users', async (req, res) => {
  const { name } = req.body;
  try {
    const { rows } = await pool.query('INSERT INTO users (name) VALUES ($1) RETURNING *', [name]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// PCスペックを追加するエンドポイント
app.post('/api/items', async (req, res) => {
  const { userName, cpu, gpu, os, memory_gb, ssd_gb } = req.body;
  try {
    const userResult = await pool.query('SELECT id FROM users WHERE name = $1', [userName]);
    if (userResult.rows.length === 0) {
      return res.status(404).send('User not found');
    }
    const user_id = userResult.rows[0].id;

    const { rows } = await pool.query(
      'INSERT INTO pc_specs (user_id, cpu, gpu, os, memory_gb, ssd_gb) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [user_id, cpu, gpu, os, memory_gb, ssd_gb]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
