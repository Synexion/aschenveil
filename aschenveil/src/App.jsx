import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Aschenveil from'./pages/aschenveil';
import Echos from'./pages/echos';
import Fiche from './pages/fiche';
import Taverne from './pages/taverne';


// 
function App() {
  return (
    <div style={{backgroundImage: "url('/body_bg.png')"}} className='bg-cover bg-center min-h-screen'>
      <div className='bg-black/70 min-h-screen'>
        <BrowserRouter>
          <nav className='bg-black/30 flex justify-center gap-6 px-8 py-4 text-white'>
            <Link className='text-gray-300 hover:text-white' to="/">Aschenveil</Link>
            <Link className='text-gray-300 hover:text-white' to="/echos">Les Echos</Link>
            <Link className='text-gray-300 hover:text-white' to="/taverne">La Taverne</Link>
            <Link className='text-gray-300 hover:text-white' to="/fiche">Ma Fiche</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Aschenveil />} />
            <Route path="/echos" element={<Echos />} />
            <Route path="/taverne" element={<Taverne />} />
            <Route path="/fiche" element={<Fiche />} />
          </Routes>
        </BrowserRouter>

        {/* Exercice d'entrainement */}

        {/* <h1>HacknSoulz</h1> */}
        {/* <PersonnageNom nom="Synexion" classe="Sacresprit"></PersonnageNom>
        <PersonnageNom nom="Ellana" classe="Voleuse"></PersonnageNom>
        <Compteur></Compteur>
        <Item nom="Eldruin" type="épée" puissance="900"/>
        <Item nom="Bouclier d'os" type="main gauche" puissance="700"></Item>
        <Item nom="Amulette en bronze" type="bijoux" puissance="250"></Item>
        <StatJoueur label="Vie" valeur="5000"></StatJoueur>
        <StatJoueur label="Armure" valeur="17400"></StatJoueur>
        <StatJoueur label="Dégâts" valeur="3500"></StatJoueur>
        <ListeUtilisateur></ListeUtilisateur>
        <ListePosts></ListePosts>
        <ListeCommentaires></ListeCommentaires>
        <ListeTodos></ListeTodos> */}
      </div>
    </div>
  );
  
}
// Composant Entrainement 
  // function PersonnageNom({nom, classe}) {
  //   return (
  //     <div>
  //       <h2>{nom}</h2>
  //       <p>{classe}</p>
  //     </div>
  //   );
  // }

  // function Compteur() {
  //   const [count, setCount]=useState(0);

  //   return(
  //     <div>
  //       <p>Kills :{count}</p>
  //       <button onClick={()=> setCount(count+ 1)}>+1 kill</button>
  //     </div>
  //   );
  // }

  // // Exercice 1 : Entrainement en autonomie sur les composants
  // function Item({nom,type,puissance}) {
  //   return(
  //     <div>
  //       <h3>{nom}</h3>
  //       <p>C'est une {type} qui a une puissance de {puissance}</p>
  //     </div>
  //   );
  // }

  // // Exercice 2 : Autres exercices

  // function StatJoueur({label, valeur}) {
  //   const [count, setCount]=useState({valeur});
    
  //   return(
  //     <div>
  //       <p>{label} : {valeur}</p>
  //     </div>
  //   );
  // }

  // // useEffect : introduction

  // function MonComposant() {
  //   const [data, setData] = useState(null);

  //   useEffect(()=> {
  //     console.log("composant affiché");
  //   },[]);

  //   return <div>{data}</div>;
  // }

  // function ListeUtilisateur() {
  //   const [utilisateurs, setUtilisateurs] = useState([]);

  //   useEffect(() => {
  //     const fetcher = async ()=> {
  //       try {
  //         const reponse = await fetch("https://jsonplaceholder.typicode.com/users/");
  //         const data = await reponse.json();
  //         setUtilisateurs(data);
  //       } catch(erreur) {
  //         console.log("Voici l'erreur :", erreur);
  //       }
  //     }
  //     fetcher();
  //   }, []);

  //   return (
  //     <ul>
  //       {utilisateurs.map(user => (
  //         <li key={user.id}>{user.name}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // function ListePosts() {
  //   const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     const recupPoste = async () => {
  //       try {
  //         const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  //         const data = await reponse.json();
  //         setPosts(data);
  //       } catch(erreur) {
  //         console.log("Voici l'erreur :", erreur)
  //       }
  //     }
  //     recupPoste();
  //   }, []);

  //   return (
  //     <ul>
  //       {posts.filter(post => post.userId === 1).map(post => (
  //         <li key={post.id}><h2>{post.title}</h2></li>
  //       ))}
  //     </ul>
  //   )
  // }

  // // Exercice en autonomie : useEffect 

  // function ListeCommentaires() {
  //   const [commentaires, setCommentaires] = useState([]);

  //   useEffect(() => {
  //     const recupCommentaire = async () => {
  //       try {
  //         const reponse = await fetch("https://jsonplaceholder.typicode.com/comments");
  //         const data = await reponse.json();
  //         console.log(data);
  //         setCommentaires(data);
  //       } catch(erreur){
  //         console.log("Voici l'erreur :",erreur)
  //       }
  //     }
  //     recupCommentaire();
  //   }, []);

  //   return(
  //     <ul>
  //       {commentaires.filter(com => com.postId === 1).map(com => (
  //         <li key={com.id}>{com.name} - {com.email}</li>
  //       ))}
  //     </ul>
  //   )
  // }

  // // Exercice en autonomie 2

  // function ListeTodos() {
  //   const [listTodo, setListTodo ] = useState([]);

  //   useEffect(()=> {
  //     const recupTodo = async () => {
  //       try {
  //         const reponse = await fetch("https://jsonplaceholder.typicode.com/todos");
  //         const data = await reponse.json();
  //         console.log(data);
  //         setListTodo(data);
  //       } catch(erreur) {
  //         console.log("Voici l'erreur :", erreur);
  //       }
  //     }
  //     recupTodo();
  //   }, []);

  //   return(
  //     <div>
  //       <p> Taches en attente : {listTodo.filter(todo => !todo.completed).length}</p>
  //       <ul>
  //         {listTodo.filter(todo => !todo.completed).map(todo => (
  //           <li key={todo.id}>tache en attente : {todo.title}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   )
  // }

export default App