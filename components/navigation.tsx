 
"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("about")

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="flex justify-center mb-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-lg rounded-full px-6 py-3"
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`px-4 py-2 text-sm transition-colors ${
              activeSection === link.name.toLowerCase() ? "text-purple-400" : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveSection(link.name.toLowerCase())}
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </nav>
  )
}

