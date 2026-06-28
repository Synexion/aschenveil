function Hero() {
  return (
    <div className="text-white text-center p-10 mt-10 flex flex-col items-center">
      <img src="/hero.png" alt="logo d'aschenveil" className="object-contain h-50 w-50 md:h-60 w-60 lg:h-80 w-80"/>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Bienvenue dans le monde d'Aschenveil</h1>
      <p className="text-gray-400 text-lg">Découvrez l'histoire de ce monde brisé</p>
      <div className="flex justify-center">
        <a href="/" className="btn_cta font-bold uppercase text-center p-10 md:p-18 lg:p-25">Découvrir Aschenveil</a>
      </div>
    </div>
  );
}

export default Hero;