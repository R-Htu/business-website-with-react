import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Navbar />
      <Home />
      <About />
      <Blog />
      <Services />
      <Contact />

    </div>
  );
}

export default App;
