import React from 'react';
import './App.css';

import { Navbar, Home, About, Contact, Community, Footer } from "./components";



const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Home />
        <About />
        <Contact />
        {/* <skill /> */}
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;


