import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { socialLinks } from '@/data/navigation';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-8 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-3">
            GET IN TOUCH
          </h2>
          <div className="w-20 h-1 bg-[#d4a574] mx-auto mb-4"></div>
          <p className="text-[#666] text-sm max-w-md mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <a
            href={`tel:${socialLinks.phone}`}
            className="group flex flex-col items-center p-4 bg-white border border-[#e5e5e5] hover:border-[#d4a574] transition-all"
          >
            <BsTelephoneFill className="w-5 h-5 text-[#d4a574] mb-2" />
            <span className="text-[#888] text-xs">Phone</span>
          </a>

          <a
            href={`mailto:${socialLinks.email}`}
            className="group flex flex-col items-center p-4 bg-white border border-[#e5e5e5] hover:border-[#d4a574] transition-all"
          >
            <MdEmail className="w-5 h-5 text-[#d4a574] mb-2" />
            <span className="text-[#888] text-xs">Email</span>
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-4 bg-white border border-[#e5e5e5] hover:border-[#d4a574] transition-all"
          >
            <FaLinkedin className="w-5 h-5 text-[#d4a574] mb-2" />
            <span className="text-[#888] text-xs">LinkedIn</span>
          </a>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-4 bg-white border border-[#e5e5e5] hover:border-[#d4a574] transition-all"
          >
            <FaGithub className="w-5 h-5 text-[#d4a574] mb-2" />
            <span className="text-[#888] text-xs">GitHub</span>
          </a>
        </div>

        {/* Contact Form - Compact */}
        <form
          data-netlify="true"
          name="contact"
          method="POST"
          action="/thank-you"
          data-netlify-honeypot="bot-field"
          className="bg-white border border-[#e5e5e5] p-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-2 text-sm bg-[#fafafa] border border-[#e5e5e5] text-[#0a0a0a] placeholder-[#aaa] focus:outline-none focus:border-[#d4a574] transition-colors"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full px-4 py-2 text-sm bg-[#fafafa] border border-[#e5e5e5] text-[#0a0a0a] placeholder-[#aaa] focus:outline-none focus:border-[#d4a574] transition-colors"
            />
          </div>

          <textarea
            name="message"
            rows={3}
            required
            placeholder="Your message"
            className="w-full px-4 py-2 text-sm bg-[#fafafa] border border-[#e5e5e5] text-[#0a0a0a] placeholder-[#aaa] focus:outline-none focus:border-[#d4a574] transition-colors resize-none mb-4"
          />

          <button
            type="submit"
            className="w-full py-3 bg-[#d4a574] text-white text-sm font-bold tracking-wider hover:bg-[#c49464] transition-colors"
          >
            SEND MESSAGE
          </button>
        </form>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-[#e5e5e5] text-center">
          <p className="text-[#888] text-xs">
            © 2025 Souhail Aouzi. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
