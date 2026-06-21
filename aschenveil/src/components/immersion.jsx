function Immersion({img,title,text,inverse}){
  return(
    <div className={`mt-15 flex items-center w-1/2 mx-auto gap-50 ${inverse ? 'flex-row-reverse' : ''}`}>
      <img src={img} alt="héros de dos devant un choix difficile dans un camp de bandit" className="h-100 w-100 shadow-white/50 shadow-2xl"/>
      <div className="shadow-white/50 bg-transparent shadow-2xl text-white flex flex-col gap-10">
      <h2 className="uppercase text-2xl font-bold">{title}</h2>
      <p className="text-justify">{text}</p>
      </div>
    </div>
  )
}

export default Immersion;