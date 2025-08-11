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

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built using Next.js, Tailwind CSS, and Framer Motion to showcase skills and projects.",
      link: "#",
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce web app with product listings, cart, and payment integration.",
      link: "#",
    },
    {
      title: "Task Manager",
      description:
        "A React app for managing daily tasks with CRUD functionality and local storage support.",
      link: "#",
    },
    {
      title: "Chat Application",
      description:
        "A real-time chat app using Socket.io and Node.js with a clean UI and instant messaging.",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0f2fe] to-[#f0fdf4] text-gray-900 px-6 py-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-[#3b5998] font-semibold hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

