import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f4f4ed] via-[#c8d6ff] to-[#f7f7f7] text-gray-900 px-6"
    >
      <div className="max-w-3xl text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi! I’m{" "}
          <span className="bg-gradient-to-r from-[#c9a14a] to-[#b3b3b3] bg-clip-text text-transparent">
            Afnan
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          A passionate{" "}
          <span className="font-semibold text-[#3b5998]">
            Fullstack Developer
          </span>{" "}
          and{" "}
          <span className="font-semibold text-[#3b5998]">
            BCA 2nd-year student
          </span>{" "}
          with a love for crafting clean, functional, and user-friendly digital
          experiences. Currently exploring modern web technologies and aiming
          to dive deeper into{" "}
          <span className="font-semibold text-[#c9a14a]">
            AI-driven development
          </span>
          .
        </motion.p>
      </div>
    </section>
  );
}
