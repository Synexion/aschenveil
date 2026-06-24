const express = require('express');
const app = express();
const PORT = 3000;

app.get('/posts', (req, res) => {
  res.json([
  {id:"1", title:"teSt", underT:"Informations sur l'équipe et sur la direction artistique du jeu & de l'univers du jeu", auth:"Synexion - STAFF", tag:["Annonce"], date:"21/06/2026", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint quibusdam iure iusto quia similique. Ipsa a obcaecati harum quam iusto ipsum accusantium eos quae!"},
  {id:"2", title:"présentation", underT:"Informations sur l'équipe et sur la direction artistique du jeu & de l'univers du jeu", auth:"Synexion - STAFF", tag:["Important"], date:"21/06/2026", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint quibusdam iure iusto quia similique. Ipsa a obcaecati harum quam iusto ipsum accusantium eos quae!"},
  {id:"3", title:"VISION", underT:"Informations sur l'équipe et sur la direction artistique du jeu & de l'univers du jeu", auth:"Synexion - STAFF", tag:["Annonce", "Important"], date:"21/06/2026", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint quibusdam iure iusto quia similique. Ipsa a obcaecati harum quam iusto ipsum accusantium eos quae!"}
]);
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
})