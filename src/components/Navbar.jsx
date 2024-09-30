

import React, { useState } from 'react';
import UseScroll from '../hooks/UseScroll';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const complete = UseScroll();

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-gray-800 text-white shadow-md shadow-white/25">
      <div className="flex flex-col lg:flex-row items-center justify-between p-4">
        
        {/* small devices nav bar */}
        <div className="lg:hidden flex justify-between items-center w-full">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        
        <ul className={`lg:flex lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 lg:items-center ${isMenuOpen ? 'flex flex-col' : 'hidden'} lg:flex`}>
          <li className='text-xl hover:bg-blue-700 p-2 rounded-md cursor-pointer'  onClick={() => scrollToSection('home')}>Home</li>
          <li className='text-xl hover:bg-blue-700 p-2 rounded-md cursor-pointer'  onClick={() => scrollToSection('about')}>About</li>
          <li className='text-xl hover:bg-blue-700 p-2 rounded-md cursor-pointer'  onClick={() => scrollToSection('projects')}>Projects</li>
          <li className='text-xl hover:bg-blue-700 p-2 rounded-md cursor-pointer'  onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>

        <div className="flex flex-row space-x-3 mt-4 lg:mt-0">
          <a href="https://github.com/ALREBDAWI"><FaGithub className="text-2xl transition-transform duration-300 hover:-translate-y-2" /></a>
          <a href="https://linkedin.com/in/m-al-rebdawi-b7a284330"><FaLinkedin className="text-2xl transition-transform duration-300 hover:-translate-y-2" /></a>
        </div>
      </div>

      {/* scroll indicator */}
      <span
        style={{ transform: `translateX(${complete - 100}%)` }}
        className="absolute w-full h-1 bg-yellow-400 bottom-0"
      />
    </nav>
  );
}


