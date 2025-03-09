import React from 'react';
import './App.css';
import {Navbar, About,Contact, Home, Services, Blog} from "./components"
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
      <Routes> 
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />

    </div>
  );
}

export default App;
