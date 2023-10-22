import React from 'react';
import './App.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Contact from './Contact';
import Shoot from './Shoot';
import Race from './Race';
import Sim from './Sim';
import Adv from './Adv';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Homepage' exact element={<Homepage />}/>
          <Route path='/Shoot' exact element={<Shoot />}/>
          <Route path='/Race' exact element={<Race />}/>
          <Route path='/Sim' exact element={<Sim />}/>
          <Route path='/Adv' exact element={<Adv />}/>
          <Route path='/Contact' exact element={<Contact />}/>
        </Routes>
        <Contact />
      </Router>
    </div>
  )
}

export default App;