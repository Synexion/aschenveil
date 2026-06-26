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

// recupère les topic officiel en bdd
app.get('/topics', async (req, res) => {
  const result = await pool.query('SELECT * FROM topics WHERE officiel = true');
  res.json(result.rows);
});

// récupère les topic joueur en bdd
app.get('/taverne', async (req, res) => {
  const result = await pool.query('SELECT * FROM topics WHERE officiel = false');
  res.json(result.rows);
});

// Insere en bdd un topic
app.post('/taverne', [body('title').isLength({min:15, max: 255}).trim(),body('undert').isLength({min: 10 , max: 255}).trim()] ,async (req,res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({message: 'Un problème a été rencontré'});
  } try {
    const {title, undert,text, tag} =  req.body;
    // Recupere le token dans le header http envoyer par le front end -> .split coupe en deux "Bearer | token" -> [1] selectionne le token seul
    const token = req.headers.authorization?.split(' ')[1];
    // Vérifie si le token est valide avec la clé secrète et renvoi le contenu decoder si c'est ok
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await pool.query('INSERT INTO topics (title,undert,text, tag, auteur) VALUES ($1, $2,$3, $4, $5)', [title,undert,text, tag, decoded.pseudo]);
    res.json({message:'topic créer !'});
  } catch(error) {
    res.status(400).json({message: 'un probleme a été rencontré'});
    console.log(error);
  }
})

// Indication port du serveur : 3000 en l'occurence
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
})

// API Inscription
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

// API connexion
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

// API Recupère les infos de date de création du profil

app.get('/profil', async (req,res) => {
  try{
  const token = req.headers.authorization?.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [decoded.id]);
  res.json(result.rows);
  } catch(error) {
    res.status(400).json({message: 'un probleme a été rencontré'});
    console.log(error);
  }
})