"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setActiveSection(sectionId)
  }

  return (
    <main className="min-h-screen bg-[#010208] text-white relative overflow-x-hidden">
      {/* Decorative stars */}
      <div className="fixed w-full h-full pointer-events-none">
        <div className="absolute top-8 left-8 w-2 h-2 bg-purple-500/30 rotate-45" />
        <div className="absolute top-8 right-8 w-2 h-2 bg-purple-500/30 rotate-45" />
        <div className="absolute bottom-8 left-8 w-2 h-2 bg-purple-500/30 rotate-45" />
        <div className="absolute bottom-8 right-8 w-2 h-2 bg-purple-500/30 rotate-45" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-sm rounded-full px-6 py-3"
        >
          {["About", "Projects", "Testimonials", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`px-4 py-2 text-sm transition-colors ${
                activeSection === item.toLowerCase() ? "text-purple-300" : "text-purple-300/60 hover:text-purple-300"
              }`}
            >
              {item}
            </button>
          ))}
        </motion.div>
      </nav>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-purple-300/90 tracking-[0.2em] text-sm mb-12"
          >
            DESENVOLVEDOR FULL STACK COM NEXT.JS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-12 tracking-tight"
          >
            Olá! Eu sou Lucas Marques, um Desenvolvedor Full Stack.
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <button
              onClick={() => scrollToSection("projects")}
              className="group bg-white/5 hover:bg-white/10 text-purple-300/90 px-6 py-3 rounded-full text-sm transition-all"
            >
              Veja meus trabalhos
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-32">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 h-full">
            <Image
              src="/react.png"
              alt="Project Preview"
              width={600}
              height={400}
              className="rounded-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8">
              <h2 className="text-2xl md:text-3xl font-light mb-4">Experiência em desenvolvimento web moderno</h2>
              <p className="text-purple-300/90">
                Desenvolvedor Full Stack com foco em tecnologias modernas como PHP, Laravel, JavaScript, Next.js e
                TailwindCSS.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8"
          >
            <h2 className="text-2xl font-light mb-6">Projetos Voluntários</h2>
            <p className="text-purple-300/90 mb-6">
              Atualmente colaborando com o Código Certo Coders e VolunDev, auxiliando iniciantes na área de tecnologia e
              fornecendo soluções tecnológicas para projetos sociais.
            </p>
            <div className="relative w-full h-64 overflow-hidden rounded-3xl">
              <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute inset-0 flex space-x-4"
              >
              {["/project1.png", "/project2.png", "/project3.png"].map((src, index) => (
                <Image
                key={index}
                src={src}
                alt={`Project ${index + 1}`}
                width={300}
                height={200}
                className="rounded-2xl"
                />
              ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-2xl font-light mb-6">Entre em contato</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="mailto:lucas@marquesdeveloper.com"
              className="group bg-white/5 hover:bg-white/10 text-purple-300/90 px-6 py-3 rounded-full text-sm transition-all inline-flex items-center"
            >
              Enviar e-mail
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://wa.me/5533991991085?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 hover:bg-white/10 text-purple-300/90 px-6 py-3 rounded-full text-sm transition-all inline-flex items-center"
            >
              WhatsApp
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

