import logo from './logo.svg';
import './App.css';
import Bargroup from './component/Bargroup';
import Chatgroup from './component/Chatgroup';
import React, { useEffect, useState} from 'react';
import io from 'socket.io-client';

let socket;
const CONNECTION_PORT = 'localhost:3003/'
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [salon,setSalon] = useState('')
  const [nom,setNom] = useState('')

  useEffect(()=> {
    socket = io(CONNECTION_PORT)
  }, [CONNECTION_PORT])

  const connexionSalon = () => {
    socket.emit("joindre_groupe", salon)
  }
  return (
    <div className="App">
        {!loggedIn ? 
        <div className='LogIn'>          
          <h1>Vous n'êtes pas connecté</h1>
          <input type="text" placeholder='Nom ...' onChange={(e)=> {setNom(e.target.value)}}/>
          <input type="text" placeholder='Salon...'onChange={(e)=> {setSalon(e.target.value)}}/>
          <button onClick={connexionSalon}>Entrer dans le salon</button>
        </div>
        : 
        <h1>Vous êtes connecté</h1>
        }
    </div>
  );
}

export default App;
