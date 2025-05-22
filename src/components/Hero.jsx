import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = ({ darkMode }) => {
  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-white to-gray-100 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className={`inline-block ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Merhaba,</span> Ben <span className={`bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'}`}>Muhammed Hatib</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Web Geliştirici 
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#portfolio"
              className={`px-6 py-3 rounded-full font-medium text-white transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${
                darkMode ? 'from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600' : 'from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              Portfolyomu Gör
            </a>
            <a
              href="#contact"
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              İletişime Geç
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <a 
            href="#about" 
            className={`rounded-full p-2 transition-all duration-300 hover:scale-110 ${
              darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
            aria-label="Scroll down"
          >
            <ArrowDown size={24} className="animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;