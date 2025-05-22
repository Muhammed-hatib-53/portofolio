import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Dosya düzenleme uygulaması',
      category: 'python',
      image: '/profile/project1.png',
      description: ' dosya türüne göre düzenleme yapan uygulama.',
      technologies: ['Python', 'pyqt5', 'qt designer'],
      githubLink: 'https://github.com/Muhammed-hatib-53/Dosya-d-zenleyici.git'
    },
    {
      id: 2,
      title: 'Memory leak detection',
      category: 'cpp',
      image: '/profile/project2.png',
      description: 'bellek sızıntısı tespit eden uygulama.',
      technologies: ['C++', 'qt creator', 'qt designer'],
      
      githubLink: 'https://github.com/Muhammed-hatib-53/memory-leak.git'
    },
    {
      id: 3,
      title: 'Döviz dönüştürücü',
      category: 'javascript',
      image: '/profile/project3.png',
      description: 'döviz dönüştürücü uygulaması.',
      technologies: ['JavaScript', 'html', 'css', 'electron'],
      githubLink: 'https://github.com/Muhammed-hatib-53/doviz.git'
    },
    {
      id: 4,
      title: 'Akıllı depo ve satış yönetimi',
      category: 'python',
      image: '/profile/project4.png',
      description: ' akıllı depo ve satış hareketi izleme uygulaması.',
      technologies: ['Python', 'Qt designer', 'sqlite3', 'pyqt5'],
      
      githubLink: 'https://github.com/Muhammed-hatib-53/akilli-Depo.git'
    },
    {
      id: 5,
      title: 'kişisel Portofolyo',
      category: 'javascript',
      image: '/profile/project5.jpg',
      description: 'kişisel portofolyo sitesi.',
      technologies: ['js', 'React', 'Tailwind css', 'vite'],
      
      githubLink: '#'
    },
  
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'python', name: 'Python' },
    { id: 'cpp', name: 'C++' },
    { id: 'javascript', name: 'JavaScript' }
  ];

  return (
    <section 
      id="portfolio" 
      className={`py-20 transition-colors duration-500 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${
            darkMode ? 'text-green-400' : 'text-green-600'
          }`}>
            Portfolyo
          </h2>
          <div className={`h-1 w-20 mx-auto rounded ${
            darkMode ? 'bg-green-400' : 'bg-green-600'
          }`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Programlama dillerine göre kategorize edilmiş projelerim.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id 
                  ? (darkMode 
                      ? 'bg-green-500 text-white' 
                      : 'bg-green-600 text-white')
                  : (darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300')
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-500 transform hover:scale-105 ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              <div className="relative overflow-hidden group h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-200 transition-colors duration-300"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 text-xs rounded-full ${
                        darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;