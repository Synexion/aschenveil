import Topic from "../components/topic.jsx";
import { useState, useEffect } from "react";

function Topics() {
  
  const [tagActif, setTagActif] = useState(null);
  const [search, setSearch] = useState("");

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/topics`)
      .then(res => res.json())
      .then(data => setTopics(data));
  }, []);

  const topicsFiltres = topics.filter(topic => 
  (tagActif === null || topic.tag.includes(tagActif)) && 
  (search === "" || topic.title.toLowerCase().includes(search.toLowerCase())));


  return(
    <div>
      <h2 className="text-center flex justify-center mx-auto w-full mt-15 text-2xl text-white uppercase font-bold md:text-3xl lg:text-4xl">Les Echos de nos avancé</h2>
      <div className="flex w-full justify-center mx-auto mt-15 text-white mb-5 md:mb-10">
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Recherchez un Echos..." className="p-5 bg-black/70 rounded-lg" />
      </div>
      <div className="flex flex-col max-w-4xl mx-auto gap-3 px-4 md:flex-row md:items-start">
        <div className="flex justify-center md:flex-col">
          <div className="bg-black/60 flex gap-5 text-white p-2 rounded-xl md:flex-col">
            <div>
              <h3 className="font-bold">Filtres</h3>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="filtre" id="null"  onChange={() => setTagActif(null)}/>
              <label htmlFor="null">Réinisialisé</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="filtre" id="annonce" onChange={() => setTagActif("Annonce")}/>
              <label htmlFor="annonce">Annonce</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="filtre"  id="important" onChange={() => setTagActif("Important")}/>
              <label htmlFor="important">Important</label>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:self-start md:flex-1">
          {topicsFiltres.length === 0 ? <p className="text-white bg-black/60 p-4 rounded-lg">Aucun Echos</p> : topicsFiltres.map(post => (<Topic key={post.id}  title={post.title} underT={post.underT} auth={post.auth} tag={post.tag} date={post.date} text={post.text} />))}
        </div>
      </div>
    </div>
  );
}

export default Topics;