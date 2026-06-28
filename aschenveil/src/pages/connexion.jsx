import { useState } from 'react';

function LogIn(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verification si champ vide
    if((email.trim() === '') || (password.trim() === '')) {
      alert('Tout les champs sont nécessaire.');
      return;
    }

    // Verification format email valide
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Format email invalide');
      return;
    } 


    fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    })
    .then(res => res.json())
    .then(data => {
      if(data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = '/fiche';
      } else {
        alert(data.message);
      }
    });

  };

  return(
    // div global
    <div>
      {/* form connexion */}
      <form onSubmit={handleSubmit} className='text-white flex flex-col gap-5 w-full mt-15 items-center mx-auto'>
        <div className='flex flex-col gap-4'>
          <input className='border p-2' type="email" placeholder="Entrez votre mail" value={email} onChange={(e => setEmail(e.target.value))}/>
          <input className='border p-2' type="text" placeholder="Entrez votre mot de passe" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <div>
          <input className='border p-2' type="submit" value="Se connecter"/>
        </div>
      </form>
    </div>
  )
}

export default LogIn;