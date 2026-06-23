import Topic from "../components/topic.jsx";
import { useState } from "react";

const posts = [
  {id:"1", title:"teSt", underT:"Informations sur l'équipe et sur la direction artistique du jeu & de l'univers du jeu", auth:"Synexion - STAFF", tag:["Annonce"], date:"21/06/2026", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint quibusdam iure iusto quia similique. Ipsa a obcaecati harum quam iusto ipsum accusantium eos quae!"},
  {id:"2", title:"présentation", underT:"Informations sur l'équipe et sur la direction artistique du jeu & de l'univers du jeu", auth:"Synexion - STAFF", tag:["Important"], date:"21/06/2026", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint quibusdam iure iusto quia similique. Ipsa a obcaecati harum quam iusto ipsum accusantium eos quae!"},
  {id:"3", title:"VISION", underT:"Informations sur l'équipe et sur la direction artistique du jeu & de l'univers du jeu", auth:"Synexion - STAFF", tag:["Annonce", "Important"], date:"21/06/2026", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint quibusdam iure iusto quia similique. Ipsa a obcaecati harum quam iusto ipsum accusantium eos quae!"}
];



function Topics() {
  
  const [tagActif, setTagActif] = useState(null);
  const [search, setSearch] = useState("");

  const postFiltres = posts.filter(post => 
  (tagActif === null || post.tag.includes(tagActif)) && 
  (search === "" || post.title.toLowerCase().includes(search.toLowerCase())));


  return(
    <div>
      <div className="flex mx-auto w-120 text-white uppercase font-bold text-4xl mt-15">
        <h2>Les Echos de nos avancé</h2>
      </div>
      <div className="flex w-50 mx-auto mt-25 text-white mb-5">
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Recherchez un Echos..." className="p-5 bg-black/70 rounded-lg" />
      </div>
      <div className="flex mx-auto w-250">
        <div className="bg-black/60 flex flex-col gap-15 text-white mt-5 p-3 self-start rounded-xl">
          <div>
            <h3 className="font-bold">Filtres</h3>
          </div>
          <div className="flex">
            <input type="radio" name="filtre" id="null"  onChange={() => setTagActif(null)}/>
            <label htmlFor="null">Réinisialisé</label>
          </div>
          <div className="flex">
            <input type="radio" name="filtre" id="annonce" onChange={() => setTagActif("Annonce")}/>
            <label htmlFor="annonce">Annonce</label>
          </div>
          <div className="flex">
            <input type="radio" name="filtre"  id="important" onChange={() => setTagActif("Important")}/>
            <label htmlFor="important">Important</label>
          </div>
        </div>
        <div className="">
          {postFiltres.length === 0 ? <p className="text-white bg-black/60 p-5 rounded-lg">Aucun Echos</p> : postFiltres.map(post => (<Topic key={post.id}  title={post.title} underT={post.underT} auth={post.auth} tag={post.tag} date={post.date} text={post.text} />))}
        </div>
      </div>
    </div>
  );
}

export default Topics;