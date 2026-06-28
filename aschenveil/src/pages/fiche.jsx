import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function Fiche (){

  const [profil, setProfil] = useState([]);

  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : null;

  useEffect(() => {
    if(!token) {
      navigate('/connexion');
    }
  }, []);


  // Récupère les infos du profil via le JWT
  const fetchProfil = () => {
    fetch(`${import.meta.env.VITE_API_URL}/profil`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => setProfil(data));
  };

  useEffect(() => {
    fetchProfil();
  }, []);


  return(
    // div global
    <div className="text-white flex flex-col mx-auto w-full">
      {/* titre */}
      <div className="mx-auto text-center mt-10 uppercase font-bold bg-black/60 rounded-lg p-5">
        <h1>Votre fiche</h1>
      </div>
      {/* infos profil , pseudo + date création */}
      <div className="flex w-full justify-center">
        <div className='flex justify-around gap-5 bg-black/70 mt-5 p-5 rounded-lg'>
          <div>
            {/* img avatar profil à mettre ici plus tard */}
            <h3>{decoded.pseudo}</h3>
          </div>
          <div>
            <p>{new Date(profil[0]?.created_at).toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </div>
      {/* recap topic créer */}
      <div className='flex flex-col mx-auto bg-black/70 rounded-lg p-5 mt-5'>
        <div className="flex text-center">
          <h2 className="uppercase font-bold">topic créer</h2>
        </div>
        <div className="flex text-center">
          <p>bientot disponible</p>
        </div>
      </div>
      {/* recap commentaire créer */}
      <div className='flex flex-col mx-auto bg-black/70 rounded-lg p-5 mt-5'>
        <div className="flex text-center">
          <h2 className="uppercase font-bold">Commentaire créer</h2>
        </div>
        <div className="flex">
          <p>bientot disponible</p>
        </div>
      </div>

    </div>
  )
}

export default Fiche;