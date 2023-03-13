import React, {useState} from "react";
import './App.css';

import Ivents from './components/IventLists/Ivents'

function App() {
  
  return (
    <div className='app-container'>
      <h1 className="ivents-row bl-pad">My Ivents</h1>
      <Ivents/>
    </div>
  );
}

export default App;
