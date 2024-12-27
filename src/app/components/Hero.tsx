'use client';
import splitStringUsingRegex from '../utils/splitStringUsingRegex';
import { motion } from 'framer-motion';

const heading = 'Hi, I am Emir!';
const text_1 = 'A Frontend Developer';
const text_2 = 'Welcome to my portfolio!';

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const Hero = () => {
  const headingChars = splitStringUsingRegex(heading);
  const text_1_Chars = splitStringUsingRegex(text_1);

  console.log(headingChars);

  return (
    <div className="w-full h-[90vh] flex flex-col md:flex-row items-center bg-hero-pattern bg-cover bg-no-repeat">
      <div className="w-full h-full flex flex-col items-center justify-center gap-2">
        <motion.h1
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.09 }}
          className="text-6xl md:text-9xl text-center"
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
          className="text-4xl md:text-7xl text-center mt-10"
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
    </div>
  );
};

export default Hero;
