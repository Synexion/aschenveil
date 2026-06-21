import PostEchos from "../components/postEcho";
import { useState } from "react";

const posts = [
  {id:"1", title:"Présentation & Vision d'Aschenveil", underT:"Informations sur l'équipe et sur la direction artistique du jeu & de l'univers du jeu", auth:"Synexion - STAFF", tag:["Annonce"], date:"21/06/2026", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint quibusdam iure iusto quia similique. Ipsa a obcaecati harum quam iusto ipsum accusantium eos quae!"},
  {id:"2", title:"Présentation & Vision d'Aschenveil", underT:"Informations sur l'équipe et sur la direction artistique du jeu & de l'univers du jeu", auth:"Synexion - STAFF", tag:["Important"], date:"21/06/2026", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint quibusdam iure iusto quia similique. Ipsa a obcaecati harum quam iusto ipsum accusantium eos quae!"},
  {id:"3", title:"Présentation & Vision d'Aschenveil", underT:"Informations sur l'équipe et sur la direction artistique du jeu & de l'univers du jeu", auth:"Synexion - STAFF", tag:["Annonce", "Important"], date:"21/06/2026", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint quibusdam iure iusto quia similique. Ipsa a obcaecati harum quam iusto ipsum accusantium eos quae!"}
];

function Echos() {
  
  const [tagActif, setTagActif] = useState(null);

  return(
    <div>
      <div className="flex mx-auto w-120 text-white uppercase font-bold text-4xl mt-15">
        <h2>Les Echos de nos avancé</h2>
      </div>
      <div className="bg-red-300 flex w-50 mx-auto mt-25">
        <p>recherche</p>
      </div>
      <div className="flex justify-around">
        <div className="bg-black/60 flex flex-col gap-15 text-white mt-8 p-3 self-start rounded-xl">
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
         {posts.filter(post => tagActif === null || post.tag.includes(tagActif)).map(post => (
            <PostEchos key={post.id} title={post.title} underT={post.underT} auth={post.auth} tag={post.tag} date={post.date} text={post.text}/>
          ))}
        </div>
        <div className="bg-green-400">
          <p>suggestions</p>
        </div>
      </div>
    </div>
  );
}

export default Echos;