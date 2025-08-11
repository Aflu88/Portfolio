// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   return (
//     <motion.nav
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white shadow-md z-50"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo / Name */}
//         <Link href="/" className="text-2xl font-bold text-purple-400">
//           Afnan
//         </Link>

//         {/* Links */}
//         <ul className="flex space-x-6">
//           <li>
//             <a href="#home" className="hover:text-purple-400 transition">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#about" className="hover:text-purple-400 transition">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#projects" className="hover:text-purple-400 transition">
//               Projects
//             </a>
//           </li>
//           <li>
//             <a href="#skills" className="hover:text-purple-400 transition">
//               Skills
//             </a>
//           </li>
//           <li>
//             <a href="#contact" className="hover:text-purple-400 transition">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </motion.nav>
//   );
// }
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500
        ${
          scrolled
            ? "bg-gradient-to-r from-[#faf5ef]/90 via-[#f0e1d2]/80 to-[#fdfdfb]/90 backdrop-blur-md shadow-md"
            : "bg-black/80 backdrop-blur-md"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className={`text-2xl font-bold transition-colors duration-500 ${
            scrolled ? "text-[#c9a14a]" : "text-purple-400"
          }`}
        >
          Afnan
        </Link>

        {/* Links */}
        <ul className="flex space-x-6">
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#projects", label: "Projects" },
            { href: "#skills", label: "Skills" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`transition-colors duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:text-[#3b5998]"
                    : "text-white hover:text-purple-400"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
