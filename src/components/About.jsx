// import React from "react";
// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section id="about" className="py-16 bg-gray-800 text-white">
//       <div className="max-w-4xl mx-auto px-6 text-center">
//         <motion.h2
//           className="text-4xl font-bold mb-6 text-purple-400"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           About Me
//         </motion.h2>

//         <motion.p
//           className="text-lg leading-relaxed text-gray-300"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           I’m <span className="text-purple-400 font-semibold">Afnan </span>,  
//           a dedicated developer who blends creativity with problem-solving. As a  
//           <span className="font-semibold"> BCA student at Calicut University</span>,  
//           I’m building a strong foundation in computer application while mastering  
//           technologies like <span className="text-purple-400">React</span>,  
//           <span className="text-purple-400">Next.js</span>, and  
//           <span className="text-purple-400">Tailwind CSS</span>.
//         </motion.p>

//         <motion.p
//           className="mt-4 text-gray-400"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           Beyond coding, I enjoy writing poetry,Drawing, learning new skills,  
//           and exploring emerging technologies. My goal is to create  
//           impactful, user-centered digital experiences that connect  
//           ideas to people.
//         </motion.p>
//       </div>
//     </section>
//   );
// }
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
      {/* Decorative curved lines */}
      <svg
        className="absolute top-10 left-0 w-full h-full pointer-events-none opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 400"
        fill="none"
      >
        <path
          d="M0 100 Q200 200 400 100 T800 100"
          stroke="#b3b3b3"
          strokeWidth="2"
        />
        <path
          d="M0 200 Q200 300 400 200 T800 200"
          stroke="#c9a14a"
          strokeWidth="2"
        />
        <path
          d="M0 300 Q200 400 400 300 T800 300"
          stroke="#3b5998"
          strokeWidth="2"
        />
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
