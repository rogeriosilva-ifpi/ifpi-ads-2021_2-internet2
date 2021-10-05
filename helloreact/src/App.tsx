import React from 'react';
import { Count } from './components/Count';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { CountSC } from './components/CountSC';

function App() {
  return (
   <Router>
     <nav>
      <Link to="/countSC">Count SC</Link>
      <Link to="/count">Count </Link>
     </nav>
     <Routes>
       <Route path="/count" element={<Count />}/>
       <Route path="/countSC" element={<CountSC />}/>
     </Routes>
   </Router>
  )
}

export default App;
