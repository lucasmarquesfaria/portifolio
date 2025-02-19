"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("sobre")

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
          className="bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3"
        >
          {["Sobre", "Projetos", "Depoimentos", "Contato", "Skills", "Certificações"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm transition-colors ${
                activeSection === item.toLowerCase() ? "text-purple-300" : "text-purple-300/60 hover:text-purple-300"
              }`}
            >
              {item}
            </button>
          ))}
        </motion.div>
      </nav>

      {/* About Section */}
      <section id="sobre" className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-purple-300/90 tracking-[0.2em] text-xs sm:text-sm mb-6 sm:mb-12"
          >
            DESENVOLVEDOR FULL STACK COM NEXT.JS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-12 tracking-tight"
          >
            Olá! Eu sou Lucas Marques, um Desenvolvedor Full Stack.
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <button
              onClick={() => scrollToSection("projetos")}
              className="group bg-white/5 hover:bg-white/10 text-purple-300/90 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm transition-all"
            >
              Veja meus trabalhos
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="min-h-screen flex items-center justify-center px-4 py-16 sm:py-32">
        <div className="max-w-6xl w-full grid gap-8 sm:gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-6 h-full">
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
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-4">Experiência em desenvolvimento web moderno</h2>
              <p className="text-purple-300/90">
                Desenvolvedor Full Stack com foco em tecnologias modernas como PHP, Laravel, JavaScript, Next.js e
                TailwindCSS.
              </p>
              <ul className="list-disc list-inside text-purple-300/90 mt-4">
                <li>Desenvolvimento de aplicações web responsivas</li>
                <li>Integração com APIs RESTful</li>
                <li>Otimização de performance e SEO</li>
                <li>Testes automatizados e TDD</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-16 sm:py-32">
        <div className="max-w-6xl w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-light mb-8"
          >
            Minhas Habilidades
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "TailwindCSS", "PHP", "Laravel", "SQL"].map((skill) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-6"
              >
                <p className="text-purple-300/90">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certificações" className="min-h-screen flex items-center justify-center px-4 py-16 sm:py-32">
        <div className="max-w-6xl w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-light mb-8"
          >
            Certificações
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "Desenvolvimento Web Completo", date: "01/10/2022", description: "Certificação em desenvolvimento Web." },
              { title: "PHP Completo", date: "02/03/2024", description: "Certificação profissional em PHP, Laravel." },
              { title: "React Completo", date: "02/02/2025", description: "Certificação em React, Next.js." },
              { title: "Node.js do Zero a Maestria com diversos Projetos", date: "30/12/2024", description: "Certificação em Node.JS" },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-6"
              >
                <h3 className="text-xl sm:text-2xl font-light mb-2">{cert.title}</h3>
                <p className="text-purple-300/90 text-sm mb-4">{cert.date}</p>
                <p className="text-purple-300/90">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-8"
          >
            <h2 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">Projetos Voluntários</h2>
            <p className="text-purple-300/90 mb-4 sm:mb-6">
              Atualmente colaborando com o Código Certo Coders e VolunDev, auxiliando iniciantes na área de tecnologia e
              fornecendo soluções tecnológicas para projetos sociais.
            </p>
            <div className="relative w-full h-48 sm:h-64 overflow-hidden rounded-3xl">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute inset-0 flex space-x-4"
              >
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: ["0%", "-33.33%", "-66.66%", "0%"] }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                  className="flex space-x-4"
                >
                  {["/project1.png", "/project2.png", "/project3.png", "/project1.png"].map((src, index) => (
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 sm:space-y-6"
        >
          <h2 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">Entre em contato</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="mailto:lucas@marquesdeveloper.com"
              className="group bg-white/5 hover:bg-white/10 text-purple-300/90 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm transition-all inline-flex items-center"
            >
              Enviar e-mail
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://wa.me/5533991991085?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 hover:bg-white/10 text-purple-300/90 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm transition-all inline-flex items-center"
            >
              WhatsApp
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          <div className="mt-6">
            <p className="text-purple-300/90">Ou me encontre nas redes sociais:</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/lucasmf99/" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" width={32} height={32} />
              </a>
              <a href="https://github.com/lucasmarquesfaria" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" width={32} height={32} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
