import {Link} from 'react-router-dom';

function Footer() {
  return(
    <div className=" flex flex-col bg-black/70 mt-20 pb-10">
      <div className='flex flex-col items-center md:flex-row md:justify-around'>
        <div className="text-white flex flex-col gap-5 mt-5">
          <h3 className='font-bold'>Navigation</h3>
            <Link className='text-white' to="/">Aschenveil</Link>
            <Link className='text-white' to="/echos">Les Echos</Link>
            <Link className='text-white' to="/taverne">La Taverne</Link>
            <Link className='text-white' to="/fiche">Ma Fiche</Link>
        </div>
        <div className='flex flex-col text-white gap-6 mt-5'>
          <h3 className='font-bold'>Liens utiles</h3>
          <a href="https://www.tiktok.com/@synexion_tv" target="_blank">Tiktok</a>
          <a href="https://github.com/Synexion" target="_blank">Github</a>
          <a href="www.linkedin.com/in/lilian-casagrande">LinkedIn</a>
        </div>
      </div>
      <div className='text-white mx-auto mt-10'>
        <p>Aschenveil - Tout droit réservé - Copyrigth 2026</p>
      </div>
    </div>
  );
}

export default Footer;