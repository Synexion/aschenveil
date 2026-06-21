function PostEchos({title,underT,text,auth,date,tag}){
  return(
    <div className="h-50 w-200 bg-black/70 text-white">
      <div>
        <div>
          <h3>{title}</h3>
          <p>{underT}</p>
          <p>{auth}</p>
        </div>
        <div>
          <p>{tag.map(t => (
            <li key={t}>{t}</li>
          ))}</p>
          <p>{date}</p>
        </div>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default PostEchos;