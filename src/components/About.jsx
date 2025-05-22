import React from 'react';

const About = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className={`py-20 transition-colors duration-500 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            Ben Kimim?
          </h2>
          <div className={`h-1 w-20 mx-auto rounded ${
            darkMode ? 'bg-blue-400' : 'bg-blue-600'
          }`}></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative w-80 h-80 mx-auto">
              <div className={`absolute inset-0 rounded-full ${
                darkMode ? 'bg-blue-400' : 'bg-blue-600'
              } blur-xl opacity-50 animate-pulse`}></div>
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105">
                <img 
                  src="/profile/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h3 className={`text-2xl font-bold mb-4 ${
              darkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>
              Web Geliştirici & Tasarımcı
            </h3>
            <p className={`mb-6 leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Web Geliştirici & Frontend Odaklı Öğrenci
              Merhaba! Ben Muhammed Hatib, üniversite 3. sınıf öğrencisi ve frontend geliştirme alanında kendini geliştiren bir yazılım meraklısıyım. HTML, CSS, React.js ve Tailwind CSS ile modern ve kullanıcı dostu arayüzler geliştiriyorum.
            </p>
            <p className={`mb-6 leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Temel düzeyde Node.js ve UI/UX bilgisine sahibim; projelerimde kullanıcı deneyimini her zaman ön planda tutmaya özen gösteriyorum. Ayrıca Python ve PyQt ile masaüstü uygulama geliştirme üzerine de deneyimlerim var.

Şu anda ağırlıklı olarak okul projeleri geliştiriyorum ve portföyümü zenginleştirerek profesyonel hayata hazırlık yapıyorum. Amacım, sade, işlevsel ve modern projelerle hem teknik becerilerimi göstermek hem de kullanıcıya değer katan işler üretmek.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                darkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-800'
              }`}>
                Front-end Geliştirme
              </div>
              <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                darkMode ? 'bg-gray-700 text-purple-300' : 'bg-purple-100 text-purple-800'
              }`}>
                Python Programlama
              </div>
              <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                darkMode ? 'bg-gray-700 text-green-300' : 'bg-green-100 text-green-800'
              }`}>
                Responsive Web
              </div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="#contact" 
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                İletişime Geç
              </a>
              <a 
                href="#portfolio" 
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                Projelerimi Gör
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;