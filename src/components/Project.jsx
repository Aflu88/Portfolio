// import React from "react";
// import { motion } from "framer-motion";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       description:
//         "A responsive portfolio built with Next.js, Tailwind CSS, and Framer Motion animations.",
//     },
//     {
//       title: "Stone Paper Scissors Game",
//       description:
//         "An interactive web game where you can play Stone Paper Scissors against the computer, built with HTML, CSS, and JavaScript.",
//       link: "https://sps-9k92.vercel.app/",
//     },
//     {
//       title: "Task Manager",
//       description:
//         "A MERN stack app for managing tasks with authentication and CRUD operations.",
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       className="py-20 px-6 sm:px-10"
//       style={{ backgroundColor: "#1E293B", color: "#F1F5F9" }}
//     >
//       <div className="max-w-5xl mx-auto">
//         <motion.h2
//           className="text-4xl font-bold text-center mb-12"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           Projects
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className="p-6 rounded-xl shadow-lg"
//               style={{ backgroundColor: "#334155" }}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.3 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
//               <p className="text-gray-300 mb-4">{project.description}</p>

//               {/* If link exists, show button */}
//               {project.link && (
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
//                 >
//                   Visit Project
//                 </a>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio",
    description: "My personal portfolio website showcasing my skills and projects.",
    tech: "React, Next.js, Tailwind",
    link: null, // no button for portfolio itself
  },
  {
    title: "Stone Paper Scissors",
    description:
      "A classic Stone Paper Scissors game made with React. Play against the computer!",
    tech: "React, CSS",
    link: "https://sps-9k92.vercel.app/",
  },
  {
    title: "ToDo App",
    description:
      "A full-stack ToDo application built with Django, Python, and React.",
    tech: "Django, Python, React",
    link: null, // no live link
  },
  {
    title: "Calculator",
    description: "A simple calculator app with basic arithmetic operations.",
    tech: "React, JavaScript",
    link: null, // no live link
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#faf5ef] via-[#f0e1d2] to-[#fdfdfb] px-6 py-16 text-gray-900"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white bg-opacity-70 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-3 text-gray-700">{project.description}</p>
              <p className="text-sm font-medium text-[#c9a14a] mb-4">{project.tech}</p>
            </div>
            <div>
              {/* Only show button if there is a link and it's not the portfolio */}
              {project.link && project.title !== "Portfolio" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-[#c9a14a] text-white rounded-md font-semibold hover:bg-[#b39b3d] transition"
                >
                  View Project
                </a>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
