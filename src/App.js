import React from 'react';
import './App.css';
// import './js/main';
// import './js/getLinks';
import { Navbar, Home, About, Contact, Community, Footer } from "./components";

// import { Navbar, Header, About, Contact, Skill, Community } from "./components";


const App = () => {
  return (
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.1/css/boxicons.min.css" />,
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


