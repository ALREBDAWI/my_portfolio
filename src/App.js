import React, { Suspense } from 'react';
import { Element, scroller } from 'react-scroll';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';



export default function App() {
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 600,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };


  return (
    <div>
      <header>
        <NavBar scrollToSection={scrollToSection} />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Element id='home'>
            <Home scrollToSection={scrollToSection} />
          </Element>
          <Element id='about'>
            <About/>
          </Element>
          <Element id='projects'>
            <Projects/>
          </Element>
          <Element id='contact'>
            <Contact/>
          </Element>
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

