import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] flex items-center justify-between">
      <span className="pl-10">Emir Cokrlija</span>
      <ul className="md:w-[60%] md:flex items-center justify-evenly">
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#experience">Experience</Link>
        </li>
        <li>
          <Link href="#education">Education</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
