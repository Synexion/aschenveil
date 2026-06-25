import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LogIn(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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


    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    })
    .then(res => res.json())
    .then(data => {
      if(data.token) {
        localStorage.setItem('token', data.token);
        navigate('/fiche');
      } else {
        alert(data.message);
      }
    });

  };

  return(
    <div>
      <form onSubmit={handleSubmit} className='text-white'>
        <div>
          <input type="email" placeholder="Entrez votre mail" value={email} onChange={(e => setEmail(e.target.value))}/>
          <input type="text" placeholder="Entrez votre mot de passe" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <div>
          <input type="submit" value="Se connecter"/>
        </div>
      </form>
    </div>
  )
}

export default LogIn;