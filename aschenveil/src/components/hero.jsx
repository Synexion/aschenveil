function Hero() {
  return (
    <div className="text-white text-center p-10 mt-10 flex flex-col items-center">
      <div> <img src="/hero.png" alt="logo d'aschenveil" className="h-80 w-80"/></div>
      <h1 className="text-4xl font-bold mb-4">Bienvenue dans le monde d'Aschenveil</h1>
      <p className="text-gray-400 text-lg">Découvrez l'histoire de ce monde brisé</p>
      <a href="/" className="btn_cta transition duration-300 font-bold uppercase block text-center p-25">Découvrir Aschenveil</a>
    </div>
  );
}

export default Hero;