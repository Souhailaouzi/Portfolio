import { FiSun, FiMoon } from "react-icons/fi";

interface NavbarProps {
  lightMode: boolean;
  setLightMode: (value: boolean) => void;
}

export default function Navbar({ lightMode, setLightMode }: NavbarProps) {
  return (
    <nav className="fixed w-full bg-[#0a192f]/90 backdrop-blur-sm py-4 z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-[#64ffda] text-xl font-mono font-bold hover:text-white transition-colors duration-300">
          سهيل اوزي
        </a>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-10">
            {["Home", "skills", "Formation", "Project", "Contact me"].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-gray-300 hover:text-[#64ffda] transition-colors duration-300 font-mono text-sm"
              >
                {item}
              </a>
            ))}
          </div>
          <button
            onClick={() => setLightMode(!lightMode)} 
            className="ml-4 p-2 rounded-full bg-[#233554] hover:bg-[#64ffda] transition-colors duration-300 flex items-center justify-center"
            aria-label="Toggle light mode"
          >
            {lightMode ? (
              <FiMoon className="text-[#0a192f] w-6 h-6" />
            ) : (
              <FiSun className="text-[#64ffda] w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
} 