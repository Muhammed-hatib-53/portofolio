import React from 'react';
import { 
  Code2, 
  GitBranch, 
  Terminal, 
  Layout, 
  Database,
  Cpu,
  MonitorSmartphone,
  FileCode2,
  Boxes,
  PenTool
} from 'lucide-react';

const Skills = ({ darkMode }) => {
  const skills = [
    { name: 'HTML5 & CSS3', level: 90, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', level: 75, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React.js', level: 80, color: 'from-blue-400 to-blue-600' },
    { name: 'Tailwind CSS', level: 85, color: 'from-teal-400 to-teal-600' },
    { name: 'Node.js', level: 50, color: 'from-green-500 to-green-700' },
    { name: 'Python', level: 70, color: 'from-teal-700 to-cyan-800' },
    { name: 'C++', level: 30, color: 'from-red-400 to-red-900' },
    { name: 'Pyqt5', level: 70, color: 'from-gray-400 to-gray-900' },
    { name: 'Sqlite3', level: 60, color: 'from-purple-400 to-purple-600' },
  ];

  const tools = [
    { 
      name: 'VS Code', 
      icon: Code2,
      color: darkMode ? 'text-blue-400' : 'text-blue-600'
    },
    { 
      name: 'Qt Creator', 
      icon: Layout,
      color: darkMode ? 'text-green-400' : 'text-green-600'
    },
    { 
      name: 'Git & GitHub', 
      icon: GitBranch,
      color: darkMode ? 'text-orange-400' : 'text-orange-600'
    },
    { 
      name: 'Qt Designer', 
      icon: PenTool,
      color: darkMode ? 'text-purple-400' : 'text-purple-600'
    },
    { 
      name: 'PyCharm', 
      icon: FileCode2,
      color: darkMode ? 'text-yellow-400' : 'text-yellow-600'
    },
    { 
      name: 'SQLite3', 
      icon: Database,
      color: darkMode ? 'text-cyan-400' : 'text-cyan-600'
    },
  ];

  return (
    <section 
      id="skills" 
      className={`py-20 transition-colors duration-500 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${
            darkMode ? 'text-purple-400' : 'text-purple-600'
          }`}>
            Neler Yapabilirim?
          </h2>
          <div className={`h-1 w-20 mx-auto rounded ${
            darkMode ? 'bg-purple-400' : 'bg-purple-600'
          }`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Modern web geliştirme teknolojileri ve tasarım araçlarında uzmanlaşmış bir geliştiriciyim.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical skills with progress bars */}
          <div className={`p-6 rounded-lg shadow-lg transition-colors duration-500 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className={`text-xl font-semibold mb-6 ${
              darkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>
              Teknik Yetenekler
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {skill.name}
                    </span>
                    <span className={`font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools and technologies */}
          <div className={`p-6 rounded-lg shadow-lg transition-colors duration-500 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className={`text-xl font-semibold mb-6 ${
              darkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>
              Araçlar & Teknolojiler
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-gray-600' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <IconComponent className={`w-6 h-6 ${tool.color}`} />
                      <span className={`font-medium ${
                        darkMode ? 'text-gray-200' : 'text-gray-800'
                      }`}>
                        {tool.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className={`text-xl font-semibold mb-6 ${
            darkMode ? 'text-gray-200' : 'text-gray-800'
          }`}>
            Çalışma Sürecim
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Planlama', description: 'Proje gereksinimlerini analiz ederek kapsamlı bir plan oluşturuyorum.' },
              { step: '02', title: 'Tasarım', description: 'Modern ve kullanıcı dostu arayüzler tasarlıyorum.' },
              { step: '03', title: 'Geliştirme', description: 'Temiz ve verimli kod yazarak tasarımı hayata geçiriyorum.' },
              { step: '04', title: 'Test & Yayın', description: 'Kapsamlı testlerden sonra projeyi yayınlıyorum.' }
            ].map((process, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto ${
                  darkMode ? 'bg-purple-500 text-white' : 'bg-purple-600 text-white'
                }`}>
                  {process.step}
                </div>
                <h4 className={`text-lg font-medium mb-2 ${
                  darkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  {process.title}
                </h4>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;