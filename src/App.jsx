import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhyChooseMe from './components/WhyChooseMe/WhyChooseMe';
import WhatICanDo from './components/WhatICanDo/WhatICanDo';
import CursorGlow from './components/CursorGlow/CursorGlow';
import './index.css';

function App() {
  return (
    <div className="App">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <WhyChooseMe />
        <About />
        <WhatICanDo />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
