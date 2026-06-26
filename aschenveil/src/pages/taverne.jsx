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

  const handleSubmit = (e) => {
  e.preventDefault();

    fetch('http://localhost:3000/taverne', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 
      'Authorization': `Bearer ${localStorage.getItem('token')}`},
      body: JSON.stringify({title,undert,text,tag:[tag]})  
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

  const fetchTopics = () => {
    fetch("http://localhost:3000/taverne")
      .then(res => res.json())
      .then(data => setTopics(data));
  };

  useEffect(() => {
    fetchTopics();
  }, []);


  const topicsFiltres = topics.filter(topic => 
  (tagActif === null || topic.tag.includes(tagActif)) && 
  (search === "" || topic.title.toLowerCase().includes(search.toLowerCase())));


  return(
    <div>
      <div className="flex mx-auto w-120 text-white uppercase font-bold text-4xl mt-15">
        <h2>Partagez vos sujets ici</h2>
      </div>
      <div className="flex w-50 mx-auto mt-25 text-white mb-5">
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Recherchez un topic..." className="p-5 bg-black/70 rounded-lg" />
      </div>
      <div className="flex justify-end w-348 text-white">
        <button className="cursor-pointer bg-black/70 p-5 rounded-lg" onClick={() => setAddTopicOverlay(true)}>Créer un topic</button>
      </div>
      {addTopicOverlay ? <div className="fixed inset-0 bg-black/80 flex items-center justify-center text-white flex-col">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Entrez un titre..." onChange={e => setTitle(e.target.value)} value={title}/>
          <input type="text" placeholder="Entrez un sous titre..." onChange={e => setUnderT(e.target.value)} value={undert}/>
          <textarea placeholder="Votre texte..." onChange={e => setText(e.target.value)} value={text}></textarea>
          <select onChange={e => setTag(e.target.value)} value={tag} className="bg-black/70">
            <option value="">-- Choisir un tag --</option>
            <option value="Discussion">Discussion</option>
            <option value="Decouverte">Découverte</option>
          </select>
          <input type="submit" value="Valider"/>
        </form>
      </div> : ''}
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
            <input type="radio" name="filtre" id="discussion" onChange={() => setTagActif("Discussion")}/>
            <label htmlFor="discussion">Discussion</label>
          </div>
          <div className="flex">
            <input type="radio" name="filtre"  id="decouverte" onChange={() => setTagActif("Decouverte")}/>
            <label htmlFor="decouverte">Découverte</label>
          </div>
        </div>
        <div className="">
          {topicsFiltres.length === 0 ? <p className="text-white bg-black/60 p-5 rounded-lg ml-83">Aucun Topic</p> : topicsFiltres.map(post => (<Topic key={post.id}  title={post.title} underT={post.underT} auth={post.auth} tag={post.tag} date={post.date} text={post.text} />))}
        </div>
      </div>
    </div>
  );
}

export default Taverne;