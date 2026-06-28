function Immersion({img,title,text,inverse}){
  return(
    <div className={`flex flex-col w-full flex-col gap-5 mx-auto mt-10 max-w-5xl px-4 md:flex-row md:gap-15 lg:gap-20 lg:flex lg:items-center lg:justify-center ${inverse ? 'md:flex-row-reverse' : ''}`}>
      <img src={img} alt="héros de dos devant un choix difficile dans un camp de bandit" className="w-full md:w-auto md:h-100 shadow-white/50 shadow-2xl"/>
      <div className="text-white flex flex-col gap-5">
        <h2 className="uppercase text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="text-justify">{text}</p>
      </div>
    </div>
  )
}

export default Immersion;