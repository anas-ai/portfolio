"use client";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="w-full h-screen mx-auto flex items-center justify-center">
      
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${styles.heroHeadText} text-white leading-tight max-w-4xl`}
        >
          Design. Develop. Scale{" "}
          <span className="text-transparent bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text">
            Real Growth
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`max-w-2xl mt-6 text-gray-300 ${styles.heroSubText}`}
        >
          We create modern digital experiences that are fast, functional, and
          built to grow with your business.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex mt-8 gap-4"
        >
          <a href="#work">

          <button 
            className="
              py-3 px-10
              text-white font-medium
              bg-gradient-to-r from-purple-500/80 to-fuchsia-500/80
              rounded-lg
              shadow-lg shadow-purple-500/20
              backdrop-blur-md
              hover:scale-105 hover:shadow-purple-500/40
              transition duration-300
            "
          >
            View Work
          </button>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;