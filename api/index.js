require('dotenv').config();
const {body, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
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


app.post('/register', [body('email').isEmail(), body('password').isLength({min : 8}), body('pseudo').isLength({min: 3, max: 15}).trim()], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({message: ' Données invalides'});
  } try {
    const {pseudo, email, password} = req.body;
    const hash = await bcrypt.hash(password, 10);
    await pool.query('INSERT INTO users (pseudo, email, password) VALUES ($1, $2, $3)', [pseudo, email, hash]);
    res.json({message: 'Inscription réussie'});
  } catch(error) {
    res.status(400).json({message: 'Cet email est déjà utilisé'});
  }
});


app.post('/login', async (req,res) => {
  const {email, password} = req.body;
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  if(result.rows.length === 0) {
    return res.json({message: 'Cet email n\'existe pas'});
  }
  const match = await bcrypt.compare(password, result.rows[0].password);
  if(match) {
    const token = jwt.sign({id : result.rows[0].id, pseudo: result.rows[0].pseudo}, process.env.JWT_SECRET, {expiresIn: '24h'});
    res.json({token});
  } else {
    res.json({message :'Identifiants ou mot de passe incorrect'}); 
  }
})