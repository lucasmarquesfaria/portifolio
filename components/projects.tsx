export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Projetos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Perdanet</h3>
              <p>
                Sistema de gestão para prevenir perdas de vendas e controlar itens sem cadastro no setor de autopeças.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">NPS BRASIL</h3>
              <p>
                Projeto feito de feedbacks de clientes, que são utilizados na indicação de futuros clientes e melhorias
                nos serviços. Um relatório é gerado com as melhorias mais votadas.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  