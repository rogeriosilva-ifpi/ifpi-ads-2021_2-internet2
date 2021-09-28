import React from 'react';
import './App.css';
import { Count } from './components/Count';
import { CountClass } from './components/CountClass';
import { Hello } from './components/Hello';
// import { Count } from './components/Count';
import { HelloWithChildren } from './components/HelloWithChildren';

function App() {
  // return <h1>Hello React</h1>
  // return <Count />
  return (
    <HelloWithChildren name="Rogério da Silva">
      <Count />
      <Hello name="Cícero"/>
      <CountClass />
    </HelloWithChildren>
  )
}

export default App;
