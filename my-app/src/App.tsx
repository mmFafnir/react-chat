import React from 'react';
import io from 'socket.io-client'; 

import './App.css';
const urlServer = 'http://cors-anywhere.herokuapp.com/http://localhost:8888/'

const socket = io('localhost:8888');

function App() {

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;

