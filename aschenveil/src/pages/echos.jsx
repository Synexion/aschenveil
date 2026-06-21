import PostEchos from "../components/postEcho";

const posts = [
  {id:"1", title:"Présentation & Vision d'Aschenveil", underT:"Informations sur l'équipe et sur la direction artistique du jeu & de l'univers du jeu", auth:"Synexion - STAFF", tag:["Annonce", "Important"], date:"21/06/2026", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint quibusdam iure iusto quia similique. Ipsa a obcaecati harum quam iusto ipsum accusantium eos quae!"},
  {id:"2", title:"Présentation & Vision d'Aschenveil", underT:"Informations sur l'équipe et sur la direction artistique du jeu & de l'univers du jeu", auth:"Synexion - STAFF", tag:["Annonce", "Important"], date:"21/06/2026", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint quibusdam iure iusto quia similique. Ipsa a obcaecati harum quam iusto ipsum accusantium eos quae!"},
  {id:"3", title:"Présentation & Vision d'Aschenveil", underT:"Informations sur l'équipe et sur la direction artistique du jeu & de l'univers du jeu", auth:"Synexion - STAFF", tag:["Annonce", "Important"], date:"21/06/2026", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint quibusdam iure iusto quia similique. Ipsa a obcaecati harum quam iusto ipsum accusantium eos quae!"}
];

function Echos() {
  return(
    <div className="">
      <div className="flex mx-auto w-120 text-white uppercase font-bold text-4xl mt-15">
        <h2>Les Echos de nos avancé</h2>
      </div>
      <div className="bg-red-300 flex w-50 mx-auto mt-25">
        <p>recherche</p>
      </div>
      <div className="flex gap-25">
        <div className="bg-blue-800 p-40 h-50 w-40 ml-40 mt-30">
          <p className="">filtres</p>
        </div>
        <div className="w-200 h-150 mt-30">
         {posts.map(post => (
            <PostEchos key={post.id} title={post.title} underT={post.underT} auth={post.auth} tag={post.tag} date={post.date} text={post.text}/>
          ))}
        </div>
        <div className="bg-green-400 h-50 w-40 mt-30">
          <p>suggestions</p>
        </div>
      </div>
    </div>
  );
}

export default Echos;