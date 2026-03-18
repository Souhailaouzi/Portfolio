import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a192f]">
      <div className="text-center p-8 rounded-lg bg-[#112240] shadow-xl max-w-md w-full">
        <FaCheckCircle className="text-[#64ffda] text-6xl mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-[#ccd6f6] mb-4">Merci pour votre message !</h1>
        <p className="text-[#8892b0] mb-8">
          Je vous répondrai dans les plus brefs délais.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#64ffda] text-[#0a192f] rounded-md font-bold hover:bg-[#52e0c4] transition-colors duration-300"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
