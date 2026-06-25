import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const profil = {
  pseudo:"test", dateInscription:"24/06/2026", topic: [{id:1, title:"test", date:"24/06/2026"}], com: [{id:1, title:"test", date:"24/06/2026"}, {id:2, title:"test 2", date:"20/06/2026"}]
};

function Fiche (){

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if(!token) {
      navigate('/connexion');
    }
  }, []);


  return(
    <div className="text-white flex flex-col mx-auto w-300">
      <div className="mx-auto w-50 text-center mt-10 uppercase font-bold bg-black/60 rounded-lg p-5">
        <h1>Votre fiche</h1>
      </div>
      <div className="flex items-center text-center gap-5 justify-around mt-5 bg-black/70 p-5">
        <div>
          <img src="/hero.png" alt="avatar" className="h-20 w-20" />
          <h3>{profil.pseudo}</h3>
        </div>
        <div>
          <p>{profil.dateInscription}</p>
        </div>
      </div>
      <div className="flex mt-5 text-center bg-black/60">
        <h2 className="uppercase font-bold">topic créer</h2>
      </div>
      <div className="flex mt-5 text-center bg-black/60">
        {profil.topic.map(t => (<p key={t.id}>{t.title} - {t.date}</p>))}
      </div>
      <div className="flex mt-5 text-center bg-black/60">
        <h2 className="uppercase font-bold">Commentaire créer</h2>
      </div>
      <div className="flex mt-5  flex-col gap-5">
        {profil.com.map(c => (<p key={c.id} className="bg-black/60">{c.title} - {c.date}</p>))}
      </div>
    </div>
  )
}

export default Fiche;