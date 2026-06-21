import {Link} from 'react-router-dom';

function Footer({img}) {
  return(
    <div className=" flex flex-col bg-black/70 mt-20 pb-10">
      <div className='flex items-start justify-around'>
        <div className="items-center flex flex-col p-10 gap-10">
          <img src={img} alt="logo Aschenveil" className="h-30 w-30"/>
          <h3 className="text-white">Aschenveil</h3>
        </div>
        <div className="text-white flex flex-col gap-6 mt-5">
          <p className='font-bold'>Navigation</p>
            <Link className='text-white hover:text-white' to="/">Aschenveil</Link>
            <Link className='text-white hover:text-white' to="/echos">Les Echos</Link>
            <Link className='text-white hover:text-white' to="/taverne">La Taverne</Link>
            <Link className='text-white hover:text-white' to="/fiche">Ma Fiche</Link>
        </div>
        <div className='flex flex-col text-white gap-6 mt-5'>
          <p className='font-bold'>Liens utiles</p>
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