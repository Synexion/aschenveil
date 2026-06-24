require('dotenv').config();
const express = require('express');
const {Pool} = require('pg');
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password:process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
const app = express();
const cors = require('cors');
app.use(cors());
const PORT = 3000;

app.get('/posts', async (req, res) => {
  const result = await pool.query('SELECT * FROM topics');
  res.json(result.rows);
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
})