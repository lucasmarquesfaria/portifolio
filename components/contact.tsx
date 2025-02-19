import { Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Contato</h2>
        <div className="flex flex-col items-center space-y-4">
          <a href="tel:+5533991991085" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
            <Phone size={20} />
            <span>(33) 99199-1085</span>
          </a>
          <a
            href="mailto:seuemail@example.com"
            className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
          >
            <Mail size={20} />
            <span>seuemail@example.com</span>
          </a>
        </div>
      </div>
    </section>
  )
}

