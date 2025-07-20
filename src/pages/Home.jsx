import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const words = ["Delivered.", "Secured.", "Optimized."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); // Change every 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      {/* Profile & Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-2xl"
      >
        <img
          src="/me.jpg"
          alt="Profile"
          className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-yellow-400 shadow-xl mb-6 mx-auto"
        />

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-2">
          CodeBernard, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 animate-pulse">
            {words[index]}
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          At CodeBernard, we help you build better software, move to the cloud,
          and solve real problems with smart technology.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg shadow-yellow-400/30 transition duration-300"
        >
          Schedule Free Consultation
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <p className="text-xs text-gray-400 mt-1">Scroll Down</p>
      </div>
    </section>
  );
}
