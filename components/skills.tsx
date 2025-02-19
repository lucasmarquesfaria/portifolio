export default function Skills() {
    const skills = [
      "PHP",
      "Laravel",
      "JavaScript",
      "C",
      "Java",
      "MySQL",
      "TailwindCSS",
      "Next.js",
      "HTML",
      "CSS",
      "Git",
      "React",
      "Node.js",
      "RESTful APIs",
    ]
  
    return (
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  