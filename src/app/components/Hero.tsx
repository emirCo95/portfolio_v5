'use client';
import Image from 'next/image';
import splitStringUsingRegex from '../utils/splitStringUsingRegex';
import { motion } from 'framer-motion';

const heading = 'Hi, I am Emir!';
const text_1 = 'A Frontend Developer';

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const Hero = () => {
  const headingChars = splitStringUsingRegex(heading);
  const text_1_Chars = splitStringUsingRegex(text_1);

  return (
    <div className="w-full h-[90vh] flex flex-col md:flex-row items-center bg-hero-pattern bg-cover bg-no-repeat">
      <div className="w-full md:w-[50%] h-full flex flex-col items-center justify-center gap-2">
        <motion.h1
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.09 }}
          className="text-6xl lg:text-9xl text-center"
        >
          {headingChars.map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 0.5 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.09 }}
          className="text-4xl lg:text-7xl text-center mt-10"
        >
          {text_1_Chars.map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 0.5 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
      <div className="w-full md:w-[50%] flex items-center justify-center border-2 border-black py-10 rounded-md">
        <div className="w-[300px] h-[520px]">
          <Image
            className="w-full h-full shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded-md"
            src="/hero.png"
            alt="hero image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
