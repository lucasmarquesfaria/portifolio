 
"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ProjectShowcase() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="relative"
      >
        <div className="absolute -top-8 -left-8 w-16 h-16">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md" />
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-4 backdrop-blur-sm">
          <Image
            src="https://sjc.microlink.io/d4a4BEpefjqoiQJrJqCxneP6GG0CX-qiGYEDSRddIAlhGTohccOMBXMNNMSHtjp-DcLzT3LG0_wNiY1n6qDmdw.jpeg"
            alt="Project Preview"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold mb-4">Experiência em desenvolvimento web moderno</h2>
        <p className="text-gray-400">
          Desenvolvedor Full Stack com foco em tecnologias modernas como PHP, Laravel, JavaScript, Next.js e
          TailwindCSS. Comprometido com projetos voluntários e sempre em busca de aprimoramento profissional.
        </p>
      </motion.div>
    </div>
  )
}

