import { useState } from 'react';

function Sub(){

  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cgu, setCgu] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    // Verification si champ vide
    if((pseudo.trim() === '') || (email.trim() === '') || (password.trim() === '') || (confirmPassword.trim() === '')) {
      alert('Tout les champs sont nécessaire.');
      return;
    }

    // Verification si CGU check
    if(!cgu){
      alert('Veuillez cocher la case CGU');
    }

    // Verification longueur du mdp
    if(password.trim().lenght < 8 ){
      alert('Le mot de passe doit contenir au moins 8 caractères');
      return;
    }

    // Verification caractere special dans mdp
    if(!/[!@#$%^&*(),.?":{}|<>\/\\]/.test(password)){
      alert('le mot de passe doit contenir au moins un caractère spécial');
      return;
    }

    // Verification format email valide
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Format email invalide');
      return;
    } 

    // Verification longueur du pseudo

    if(pseudo.trim().length > 15) {
      alert('Le pseudo ne pas dépasser 15 caractères');
      return;
    }


    fetch(`${import.meta.env.VITE_API_URL}/register`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({pseudo, email, password})
    })
    .then(res => res.json())
    .then(data => {
      if(data.message === 'inscription réussie') {
        alert('Bienvenue !')
      } else {
        alert(data.message);
      }
    });

  };

  return(
    // div global
    <div>
      <form onSubmit={handleSubmit} className='text-white flex flex-col gap-5 w-full mt-15 items-center mx-auto'>
        <div className='flex flex-col w-full gap-3 items-center'>
          <input className='border p-2' type="text" placeholder='Entrez un Pseudo' value={pseudo} onChange={e => setPseudo(e.target.value)}/>
          <input className='border p-2' type="email" placeholder="Entrez votre mail" value={email} onChange={(e => setEmail(e.target.value))}/>
          <input className='border p-2' type="text" placeholder="Entrez un mot de passe" value={password} onChange={e => setPassword(e.target.value)}/>
          <input className='border p-2' type="text" placeholder="Confirmez votre mot de passe" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
        </div>
        <div className='flex gap-3 mx-auto justify-center items-center px-4'>
          <input type="checkbox" id='cgu' onChange={e => setCgu(e.target.checked)}/>
          <label htmlFor="cgu">En cochant la case, vous accepter les CGU.</label>
        </div>
        <div>
          <input className='border p-2' type="submit" value="S'inscrire"/>
        </div>
      </form>
    </div>
  )
}

export default Sub;