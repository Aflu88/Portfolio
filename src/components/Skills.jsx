import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiDjango, SiC } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-[#c9a14a]" size={40} /> }, // golden
  { name: "CSS", icon: <FaCss3Alt className="text-[#b3b3b3]" size={40} /> }, // silver
  { name: "JavaScript", icon: <FaReact className="text-[#3b5998]" size={40} /> }, // blue
  { name: "React", icon: <FaReact className="text-[#3b5998]" size={40} /> }, // blue
  { name: "Next.js", icon: <SiNextdotjs className="text-[#b3b3b3]" size={40} /> }, // silver
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#c9a14a]" size={40} /> }, // golden
  { name: "Python", icon: <FaPython className="text-[#3b5998]" size={40} /> }, // blue
  { name: "Django", icon: <SiDjango className="text-[#b3b3b3]" size={40} /> }, // silver
  { name: "C", icon: <SiC className="text-[#c9a14a]" size={40} /> }, // golden
  { name: "Node.js", icon: <FaNodeJs className="text-[#3b5998]" size={40} /> }, // blue
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#faf5ef] via-[#f0e1d2] to-[#fdfdfb] text-gray-900 px-6 overflow-hidden"
    >
      {/* Decorative background of soft circles */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 400"
      >
        {[...Array(30)].map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 600}
            cy={Math.random() * 400}
            r={5}
            fill="#c9a14a"
          />
        ))}
      </svg>

      <div className="max-w-5xl w-full relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white bg-opacity-70 backdrop-blur-md p-6 rounded-xl shadow-lg cursor-default transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
            >
              {skill.icon}
              <p className="mt-3 text-lg font-semibold text-gray-800">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
