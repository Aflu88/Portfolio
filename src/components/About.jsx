import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Profile Image */}
        <motion.img
          src="/profile.jpg" 
          alt="Profile"
          className="w-48 h-48 rounded-full border-4 border-purple-500 object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} //
        />

        {/* About Text */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} //
        >
          <h2 className="text-4xl font-bold mb-4 text-purple-400">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Hi, I'm <span className="text-purple-400 font-semibold">Afnan</span>,  
            a passionate <span className="font-semibold">Fullstack Developer</span>  
            and <span className="font-semibold">BCA 2nd-year student</span> from Malappuram.  
            I love building sleek, functional web apps using modern tools like  
            <span className="text-purple-400"> React</span>,  
            <span className="text-purple-400"> Next.js</span>, and  
            <span className="text-purple-400"> Tailwind CSS</span>.  
          </p>
          <p className="mt-4 text-gray-400">
            Outside coding, I enjoy writing poetry, exploring tech trends, and  
            playing football with friends. 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}
