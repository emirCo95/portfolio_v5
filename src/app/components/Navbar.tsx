import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] flex items-center justify-between">
      <span className="pl-10">Emir Cokrlija</span>
      <ul className="md:w-[60%] md:flex items-center justify-evenly">
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Education</li>
        <li>Skills</li>
        <li>Projects</li>
      </ul>
    </div>
  );
};

export default Navbar;
