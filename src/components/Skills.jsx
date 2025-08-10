import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiDjango, SiC } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={40} /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={40} /> },
  { name: "JavaScript", icon: <FaReact className="text-yellow-400" size={40} /> },
  { name: "React", icon: <FaReact className="text-cyan-400" size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" size={40} /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" size={40} /> },
  { name: "Django", icon: <SiDjango className="text-green-500" size={40} /> },
  { name: "C", icon: <SiC className="text-blue-400" size={40} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" size={40} /> },
];

export default function Skills() {
  return (
    <section className="py-16 bg-gray-900 text-white" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-gray-800 p-4 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {skill.icon}
              <p className="mt-2 text-lg font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
