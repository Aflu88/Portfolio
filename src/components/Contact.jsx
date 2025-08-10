// Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-gray-950 text-white flex flex-col justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-12">Contact</h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <Mail size={36} className="text-blue-400 mb-3" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-300 mt-1">afnanmoothedath@gmail.com</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <Phone size={36} className="text-green-400 mb-3" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-300 mt-1">+91 9946375566</p>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <MapPin size={36} className="text-red-400 mb-3" />
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-gray-300 mt-1">Edavanna, Malappuram, Kerala</p>
          </motion.div>

          {/* GitHub */}
          <motion.a
            href="https://github.com/Aflu88"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <Github size={36} className="text-white mb-3" />
            <h3 className="text-xl font-semibold">GitHub</h3>
            <p className="text-gray-300 mt-1">Aflu88</p>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
