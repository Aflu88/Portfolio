// // Contact.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Github } from "lucide-react";

// const Contact = () => {
//   return (
//     <section id="contact" className="min-h-screen bg-gray-950 text-white flex flex-col justify-center px-6">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//         className="max-w-4xl mx-auto text-center"
//       >
//         <h2 className="text-4xl font-bold mb-12">Contact</h2>

//         <div className="grid gap-8 sm:grid-cols-2">
//           {/* Email */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-lg"
//           >
//             <Mail size={36} className="text-blue-400 mb-3" />
//             <h3 className="text-xl font-semibold">Email</h3>
//             <p className="text-gray-300 mt-1">afnanmoothedath@gmail.com</p>
//           </motion.div>

//           {/* Phone */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-lg"
//           >
//             <Phone size={36} className="text-green-400 mb-3" />
//             <h3 className="text-xl font-semibold">Phone</h3>
//             <p className="text-gray-300 mt-1">+91 9946375566</p>
//           </motion.div>

//           {/* Location */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-lg"
//           >
//             <MapPin size={36} className="text-red-400 mb-3" />
//             <h3 className="text-xl font-semibold">Location</h3>
//             <p className="text-gray-300 mt-1">Edavanna, Malappuram, Kerala</p>
//           </motion.div>

//           {/* GitHub */}
//           <motion.a
//             href="https://github.com/Aflu88"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.05 }}
//             className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-lg"
//           >
//             <Github size={36} className="text-white mb-3" />
//             <h3 className="text-xl font-semibold">GitHub</h3>
//             <p className="text-gray-300 mt-1">Aflu88</p>
//           </motion.a>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;
import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f4f4ed] via-[#c8d6ff] to-[#f7f7f7] text-gray-900 px-6 overflow-hidden"
    >
      {/* Decorative soft circles background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 400"
      >
        {[...Array(20)].map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 600}
            cy={Math.random() * 400}
            r={6}
            fill="#c9a14a"
          />
        ))}
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Contact</h2>

        <div className="flex flex-col space-y-8 text-left">
          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center space-x-4 bg-white bg-opacity-70 backdrop-blur-md p-5 rounded-xl shadow-lg cursor-default"
          >
            <Mail
              size={36}
              className="text-gradient bg-gradient-to-r from-purple-500 via-purple-700 to-indigo-600"
              style={{ WebkitBackgroundClip: "text", color: "transparent" }}
            />
            <div>
              <h3 className="text-xl font-semibold text-purple-700">Email</h3>
              <p className="text-gray-800 font-medium">afnanmoothedath@gmail.com</p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center space-x-4 bg-white bg-opacity-70 backdrop-blur-md p-5 rounded-xl shadow-lg cursor-default"
          >
            <MapPin
              size={36}
              className="text-gradient bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"
              style={{ WebkitBackgroundClip: "text", color: "transparent" }}
            />
            <div>
              <h3 className="text-xl font-semibold text-yellow-600">Location</h3>
              <p className="text-gray-800 font-medium">Edavanna, Malappuram, Kerala</p>
            </div>
          </motion.div>

          {/* GitHub */}
          <motion.a
            href="https://github.com/Aflu88"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="flex items-center space-x-4 bg-white bg-opacity-70 backdrop-blur-md p-5 rounded-xl shadow-lg cursor-pointer"
          >
            <Github
              size={36}
              className="text-gradient bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700"
              style={{ WebkitBackgroundClip: "text", color: "transparent" }}
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-700">GitHub</h3>
              <p className="text-gray-800 font-medium">Aflu88</p>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
