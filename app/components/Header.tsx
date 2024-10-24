import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary p-4 fixed z-50 top-0 left-0 w-full">
      <h1 className="text-warda font-black text-4xl text-center font-serif pb-2">Portfolio</h1>
      <nav>
        <ul className="flex space-x-3 text-secondary font-sans justify-between">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
