require('dotenv').config();
const bcrypt = require('bcrypt');
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
app.use(express.json());

app.get('/posts', async (req, res) => {
  const result = await pool.query('SELECT * FROM topics');
  res.json(result.rows);
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
})


app.post('/register', async (req, res) => {
  const {pseudo, email, password} = req.body;
  const hash = await bcrypt.hash(password, 10);
  await pool.query('INSERT INTO users (pseudo, email, password) VALUES ($1, $2, $3)', [pseudo, email, hash]);
  res.json({message: 'Inscription réussie'});
})

app.post('/login', async (req,res) => {
  const {email, password} = req.body;
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  const match = await bcrypt.compare(password, result.rows[0].password);
  if(match) {
    res.json({message : 'Connexion réussie'});
  } else {
    res.json({message :'Identifiants ou mot de passe incorrect'}); 
  }
})