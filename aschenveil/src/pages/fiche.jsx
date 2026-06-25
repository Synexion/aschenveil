import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function Fiche (){

  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : null;

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
          <h3>{decoded.pseudo}</h3>
        </div>
        <div>
          <p>date inscription</p>
        </div>
      </div>
      <div className="flex mt-5 text-center bg-black/60">
        <h2 className="uppercase font-bold">topic créer</h2>
      </div>
      <div className="flex mt-5 text-center bg-black/60">
        <p>bientot disponible</p>
      </div>
      <div className="flex mt-5 text-center bg-black/60">
        <h2 className="uppercase font-bold">Commentaire créer</h2>
      </div>
      <div className="flex mt-5  flex-col gap-5">
        <p>bientot disponible</p>
      </div>
    </div>
  )
}

export default Fiche;