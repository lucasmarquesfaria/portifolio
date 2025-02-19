"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="text-center mb-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-purple-400 tracking-widest text-sm mb-6"
      >
        DESENVOLVEDOR FULL STACK COM NEXT.JS
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-4xl md:text-5xl font-bold mb-8 max-w-3xl mx-auto"
      >
        Olá! Eu sou Lucas Marques, um Desenvolvedor Full Stack baseado em Caratinga, MG
      </motion.h1>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full transition-colors"
        >
          Veja meu trabalho
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </motion.div>
    </div>
  )
}

