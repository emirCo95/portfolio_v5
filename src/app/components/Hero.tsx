import React from 'react';

const heading = 'Hi, I am Emir!';
const text_1 = 'A Frontend Developer';
const text_2 = 'Welcome to my portfolio!';

const Hero = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col md:flex-row items-center bg-hero-pattern bg-cover bg-no-repeat">
      <div className="w-full h-full flex flex-col items-center justify-center gap-2">
        <h1 className="text-6xl md:text-9xl text-center">{heading}</h1>
        <p className="text-4xl md:text-7xl text-center">{text_1}</p>
        <p className="text-2xl md:text-4xl text-center mt-10">{text_2}</p>
      </div>
    </div>
  );
};

export default Hero;
