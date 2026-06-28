import Topic from "../components/topic.jsx";
import { useState, useEffect } from "react";

function Taverne() {
  
  const [tagActif, setTagActif] = useState(null);
  const [search, setSearch] = useState("");
  const [topics, setTopics] = useState([]);
  const [addTopicOverlay, setAddTopicOverlay] = useState(false);
  const [title, setTitle] = useState("");
  const [undert, setUnderT] = useState("");
  const [text, setText] = useState("");
  const [tag, setTag] = useState("");
  const token = localStorage.getItem('token');

  const handleSubmit = (e) => {
  e.preventDefault();

    if(tag === ""){
      alert('Veuillez choisir un tag');
      return;
    }

    // fetch vers l'api de creation de topic
    fetch(`${import.meta.env.VITE_API_URL}/taverne`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 
      'Authorization': `Bearer ${localStorage.getItem('token')}`},
      body: JSON.stringify({title,undert,text,tag: [tag]})  
    })
    .then(res => res.json())
    .then(data => {
      if(data.message === 'topic créer !') {
        setAddTopicOverlay(false);
        fetchTopics();
      } else {
        alert(data.message);
      }
    });

  };

  // fetch vers API de recuperation des topic , pour la liste des topic
  const fetchTopics = () => {
    fetch(`${import.meta.env.VITE_API_URL}/taverne`)
      .then(res => res.json())
      .then(data => setTopics(data));
  };

  useEffect(() => {
    fetchTopics();
  }, []);


  const topicsFiltres = topics.filter(topic => 
  (tagActif === null) || topic.tag && topic.tag.some(t => t.toLowerCase() === tagActif.toLowerCase()) && (search === "" || topic.title.toLowerCase().includes(search.toLowerCase())));


  return(
    <div>
      {/* titre vue topic */}
      <h2 className="flex w-full justify-center text-white uppercase font-bold mt-5 md:mt-15 md:text-3xl lg:text-4xl">Partagez vos sujets ici</h2>
      {/* Barre de recherche topic */}
      <div className="flex w-full justify-center text-white mt-5 mb-5">
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Recherchez un topic..." className="p-5 bg-black/70 rounded-lg" />
      </div>
      {/* Btn overlay formumaire création topic */}
      <div className="flex mt-5 mb-5 text-white px-5 justify-around">
        {token ? <button className="cursor-pointer bg-black/60 p-3 rounded-lg" onClick={() => setAddTopicOverlay(true)}>Créer un topic</button> : ''}
      </div>
      {/* formulaire création topic */}
      {addTopicOverlay ? <div className="fixed inset-0 bg-black/80 flex items-center justify-center text-white flex-col ">
        <button className="cursor-pointer mb-10 bg-black/80" onClick={() => setAddTopicOverlay(false)}>X</button>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-black/50">
          <input type="text" placeholder="Entrez un titre..." onChange={e => setTitle(e.target.value)} value={title}/>
          <input type="text" placeholder="Entrez un sous titre..." onChange={e => setUnderT(e.target.value)} value={undert}/>
          <textarea placeholder="Votre texte..." onChange={e => setText(e.target.value)} value={text}></textarea>
          <select onChange={e => setTag(e.target.value)} value={tag} className="bg-black/70 cursor-pointer">
            <option value="">-- Choisir un tag --</option>
            <option value="Discussion">Discussion</option>
            <option value="Decouverte">Découverte</option>
            <option value="Annonce">Annonce</option>
          </select>
          <input type="submit" value="Valider" className="cursor-pointer"/>
        </form>
      </div> : ''}
      {/* Filtres et liste topic */}
      <div className="flex flex-col max-w-4xl mx-auto gap-3 px-4 md:flex-row md:items-start">
        {/* filtres */}
        <div className="bg-black/60 flex text-white rounded-xl gap-3 px-4 p-2 md:flex-col">
          <div className="flex items-center">
            <h3 className="font-bold">Filtres</h3>
          </div>
          <div className="flex items-center">
            <input type="radio" name="filtre" id="null"  onChange={() => setTagActif(null)}/>
            <label htmlFor="null">Réinisialisé</label>
          </div>
          <div className="flex items-center">
            <input type="radio" name="filtre" id="discussion" onChange={() => setTagActif("Discussion")}/>
            <label htmlFor="discussion">Discussion</label>
          </div>
          <div className="flex items-center">
            <input type="radio" name="filtre"  id="decouverte" onChange={() => setTagActif("Decouverte")}/>
            <label htmlFor="decouverte">Découverte</label>
          </div>
        </div>
        {/* liste */}
        <div className="flex justify-center md:self-start md:flex-1">
          {topicsFiltres.length === 0 ? <p className="text-white bg-black/60 p-4 rounded-lg">Aucun Topic</p> : topicsFiltres.map(post => (<Topic key={post.id}  title={post.title} underT={post.underT} auth={post.auth} tag={post.tag} date={post.date} text={post.text} />))}
        </div>
      </div>
    </div>
  );
}

export default Taverne;