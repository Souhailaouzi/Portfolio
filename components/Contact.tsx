import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';

interface ContactProps {
  lightMode: boolean;
}

export default function Contact({ lightMode }: ContactProps) {
  return (
    <section id="contact" className={`py-16 ${lightMode ? "bg-white" : "bg-[#0a192f]"}`}>
      <h2 className={`text-4xl md:text-5xl font-extrabold text-center mb-8 font-mono ${lightMode ? "text-[#0a192f]" : "text-[#ccd6f6]"}`}>
        Contact
      </h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Formulaire à gauche */}
        <form 
          data-netlify="true"
          name="contact"
          method="POST"
          action="/thank-you"
          data-netlify-honeypot="bot-field"
          className={`bg-transparent p-4 rounded-xl shadow ${lightMode ? "" : "text-[#ccd6f6]"}`}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="success" value="/thank-you" />
          <h3 className={`text-2xl font-bold mb-4 font-mono ${lightMode ? "text-[#0a192f]" : "text-[#64ffda]"}`}>Contactez-moi</h3>
          <div className="mb-2">
            <label className="block mb-1 font-semibold text-sm" htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required placeholder="Votre nom"
              className="w-full px-3 py-1.5 rounded-lg bg-[#e5e7eb] text-[#0a192f] text-sm focus:outline-none focus:ring-2 focus:ring-[#64ffda]" />
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-semibold text-sm" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="Votre email"
              className="w-full px-3 py-1.5 rounded-lg bg-[#e5e7eb] text-[#0a192f] text-sm focus:outline-none focus:ring-2 focus:ring-[#64ffda]" />
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-semibold text-sm" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={3} required placeholder="Votre message"
              className="w-full px-3 py-1.5 rounded-lg bg-[#e5e7eb] text-[#0a192f] text-sm focus:outline-none focus:ring-2 focus:ring-[#64ffda]" />
          </div>
          <button type="submit"
            className="w-full py-2 mt-2 rounded-lg bg-[#64ffda] text-[#0a192f] font-bold hover:bg-[#52e0c4] transition text-sm">
            Envoyer
          </button>
        </form>
        {/* Infos à droite */}
        <div className={`flex flex-col gap-4 p-4 rounded-xl shadow ${lightMode ? "bg-[#f5f7fa]" : "bg-[#112240]"}`}>
          <h3 className={`text-xl font-bold mb-2 font-mono ${lightMode ? "text-[#0a192f]" : "text-[#64ffda]"}`}>Mes infos</h3>
          <div className="flex items-center gap-2 text-sm">
            <BsTelephoneFill className="text-[#64ffda] w-5 h-5" />
            <span className={`${lightMode ? "text-[#0a192f]" : "text-[#ccd6f6]"}`}>+212 6 75 58 89 51</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MdEmail className="text-[#64ffda] w-5 h-5" />
            <span className={`${lightMode ? "text-[#0a192f]" : "text-[#ccd6f6]"}`}>souhailaouzi1949@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FaLinkedin className="text-[#64ffda] w-5 h-5" />
            <a
              href="https://linkedin.com/in/souhail-aouzi-1949sou"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline ${lightMode ? "text-[#0a192f]" : "text-[#ccd6f6]"}`}
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FaGithub className="text-[#64ffda] w-5 h-5" />
            <a
              href="https://github.com/Souhailaouzi"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline ${lightMode ? "text-[#0a192f]" : "text-[#ccd6f6]"}`}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 