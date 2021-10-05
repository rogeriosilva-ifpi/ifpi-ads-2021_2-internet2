import React from 'react';
import { Count } from './components/Count';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { CountSC } from './components/CountSC';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { Filmes } from './pages/Filmes';

function App() {
  return (
   <Router>
     <Header/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/filmes" element={<Filmes/>} />
       <Route path="/count" element={<Count />}/>
       <Route path="/countSC" element={<CountSC />}/>
     </Routes>
   </Router>
  )
}

export default App;
