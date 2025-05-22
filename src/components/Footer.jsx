import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={`py-8 transition-colors duration-500 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold">Portfolio</a>
            <p className="mt-2 text-sm text-gray-400">
              Modern, profesyonel ve kullanıcı dostu web çözümleri.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#home" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Ana Sayfa
            </a>
            <a 
              href="#about" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Hakkımda
            </a>
            <a 
              href="#skills" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Yetenekler
            </a>
            <a 
              href="#portfolio" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Portfolyo
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              İletişim
            </a>
          </div>
          
          <button
            onClick={scrollToTop}
            className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                : 'bg-gray-700 hover:bg-gray-600 text-white'
            }`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;