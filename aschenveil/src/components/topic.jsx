function Topic({title,underT,text,auth,date,tag}){
  return(
    <div className="text-white bg-black/70 flex flex-col rounded-xl">
      <div className="p-5">
        <div>
          <h3 className="font-bold uppercase md:text-2xl">{title}</h3>
          <p className="text-gray-300 mt-2">{underT}</p>
          <p className="">{auth}</p>
          <p className="">{date}</p>
        </div>
        <div>
          <p className="flex gap-5">{(tag || []).map(t => (
            <li key={t} className="list-none bg-gray-700 p-2 rounded">{t}</li>
          ))}</p>
        </div>
      </div>
      <div className="mx-auto flex text-justify mb-5 ml-5 mr-5">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Topic;