import React from 'react';
import './App.scss';
import Navbar from "./Components/Navbar"
import Home from './Components/Home';
import About from './Components/About';
import Dribble from './Components/Dribble';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
   <div>
     <Navbar />
     <Home />
     <About />
     <Dribble />
     <Work />
     <Contact />
     <Footer />
   </div>
  );
}

export default App;
