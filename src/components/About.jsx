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

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#F8F5F0] text-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-[#1E3A8A]" // Deep blue
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          I’m{" "}
          <span className="text-[#B89B5E] font-semibold">Afnan</span>, a dedicated
          developer who blends creativity with problem-solving. As a{" "}
          <span className="font-semibold">BCA student at Calicut University</span>, I’m
          building a strong foundation in computer applications while mastering
          technologies like{" "}
          <span className="text-[#1E3A8A] font-semibold">React</span>,{" "}
          <span className="text-[#1E3A8A] font-semibold">Next.js</span>, and{" "}
          <span className="text-[#1E3A8A] font-semibold">Tailwind CSS</span>.
        </motion.p>

        <motion.p
          className="mt-4 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Beyond coding, I enjoy{" "}
          <span className="italic">writing poetry</span>,{" "}
          <span className="italic">drawing</span>, learning new skills, and
          exploring emerging technologies. My goal is to create impactful,
          user-centered digital experiences that connect ideas to people.
        </motion.p>
      </div>
    </section>
  );
}
