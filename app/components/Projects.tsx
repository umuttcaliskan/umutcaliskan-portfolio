import { useState } from 'react';
import React from 'react';

interface Project {
  name: string;
  href: string;
  githubUrl: string;
  description: string;
  screenshot?: string;
  technologies: string[];
  type: string;
  icon: React.ReactNode;
}

interface ProjectsProps {
  theme: 'light' | 'dark';
}

export function Projects({ theme }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openTechnologiesModal = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <>
      <h2 className={`text-3xl md:text-4xl font-bold mb-12 pb-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        Projelerim
      </h2>
      <div className="grid grid-cols-1 gap-6 mb-16">
        {websites.map((website) => (
          <div
            key={website.name}
            className={`group relative rounded-xl overflow-hidden backdrop-blur-md transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gray-800/50 hover:bg-gray-700/50'
                : 'bg-white/50 hover:bg-gray-100/50'
            } shadow-lg hover:shadow-xl`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                <div className="w-full h-full relative bg-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {website.screenshot ? (
                    <img 
                      src={website.screenshot} 
                      alt={`${website.name} ekran görüntüsü`} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="inline-block">{website.icon}</span>
                  {website.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${
                    theme === 'dark' 
                      ? 'bg-blue-600/20 text-blue-400' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {website.type}
                  </span>
                </div>
                <p className={`mb-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {website.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {website.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-2 py-1 text-xs rounded-md ${
                        theme === 'dark' 
                          ? 'bg-gray-700 text-blue-300' 
                          : 'bg-gray-100 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {website.technologies.length > 3 && (
                    <button
                      type="button"
                      onClick={() => openTechnologiesModal(website)}
                      className={`z-10 relative px-2 py-1 text-xs rounded-md transition-all duration-300 hover:scale-105 ${
                        theme === 'dark'
                          ? 'bg-gray-700 text-blue-300 hover:bg-gray-600'
                          : 'bg-gray-100 text-blue-700 hover:bg-gray-200'
                      }`}
                    >
                      +{website.technologies.length - 3} Daha
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={website.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`z-10 relative flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-blue-500 hover:bg-blue-600'
                    } text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Live</span>
                  </a>
                  {website.githubUrl && (
                    <a
                      href={website.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`z-10 relative flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm transition-all duration-300 ${
                        theme === 'dark'
                          ? 'bg-gray-700 hover:bg-gray-600'
                          : 'bg-gray-200 hover:bg-gray-300'
                      } shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <div className={`relative w-full max-w-2xl rounded-2xl shadow-xl ${
            theme === 'dark' 
              ? 'bg-gray-800' 
              : 'bg-white'
          } p-6 md:p-8`}>
            <button
              onClick={() => setShowModal(false)}
              className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-700'
                  : 'text-gray-600 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block">{selectedProject.icon}</span>
              <h3 className="text-2xl font-bold">{selectedProject.name}</h3>
            </div>

            <div className="mb-4">
              <h4 className={`text-lg font-medium mb-3 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Kullanılan Teknolojiler
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className={`px-4 py-2 text-sm rounded-lg ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-blue-300' 
                        : 'bg-gray-100 text-blue-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowModal(false)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// projeler
const websites = [
  {
    name: "QR-Gen | QR Code Generator",
    href: "https://umutcaliskan.com",
    githubUrl: "https://github.com/umuttcaliskan/QR-Gen",
    description: "QR kod oluşturma, özelleştirme ve yönetme imkanı sunan kapsamlı bir mobil uygulama.",
    screenshot: "/qr-gen.png",
    technologies: ["React Native & Expo", "Nativewind", "TypeScript"],
    type: "Mobile Application",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>
    )
  },
  {
    name: "Cv-Gen | CV Generator",
    href: "https://portfolio.umutcaliskan.com",
    githubUrl: "https://github.com/umuttcaliskan/CvGen.git",
    description: "Profesyonel özgeçmiş oluşturmanızı sağlayan, özelleştirilebilir şablonlar sunan mobil uygulama.",
    screenshot: "/cv-gen-mobil.png",
    technologies: ["React Native & Expo", "NativeWind", "Firebase", "TypeScript", "AsyncStorage", "Context API" ],
    type: "Mobile Application",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    name: "Cv-Gen | CV Generator",
    href: "https://cvgen.com.tr",
    githubUrl: "https://github.com/umuttcaliskan/CvGen-Web.git",
    description: "CV-Gen mobil uygulamasının web versiyonu. Profesyonel özgeçmişler oluşturmak için kullanıcı dostu bir web arayüzü.",
    screenshot: "/cvgen-web.png",
    technologies: ["Next.js", "Firebase", "TailwindCSS", "cPanel" , "TypeScript", "Context API"],
    type: "Website",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    name: "Calculation Center",
    href: "https://cvgen.app",
    githubUrl: "https://github.com/umuttcaliskan/HesapMerkezim.git",
    description: "Günlük finansal işlemlerinizi takip edebileceğiniz, gelir-gider analizi yapabileceğiniz Chrome uzantısı.",
    screenshot: "/hesap-merkezim.png",
    technologies: ["React.js", "Webpack", "TailwindCSS", "Axios" , "TypeScript", "Chart.js"],
    type: "Google Chrome Extension",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: "My Portfolio",
    href: "https://umutcaliskan.info",
    githubUrl: "https://github.com/umuttcaliskan/HesapMerkezim.git",
    description: "Kişisel portfolyo websitem. Projelerimi, yeteneklerimi ve deneyimlerimi sergilediğim modern bir web uygulaması.",
    screenshot: "/portfolio.png",
    technologies: ["React.js", "Webpack", "TailwindCSS", "Axios" , "TypeScript", "Chart.js"],
    type: "Website",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    name: "MSG Digital",
    href: "https://msgdijital.com",
    githubUrl: "",
    description: "Dijital pazarlama ajansı için geliştirilen modern ve responsive kurumsal websitesi.",
    screenshot: "/msg.png",
    technologies: ["React.js", "Webpack", "TailwindCSS", "Axios" , "TypeScript", "Chart.js"],
    type: "Website",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    name: "ECF Gift Store",
    href: "https://ecfhediyelik.com",
    githubUrl: "",
    description: "Hediyelik eşya satışı yapan e-ticaret sitesi. Opencart altyapısı ile özelleştirilmiş temaya sahip.",
    screenshot: "/ecf.png",
    technologies: ["Opencart", "PHP", "MySQL", "OpenCart Extensions" , "Twig", "cPanel"],
    type: "Website",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    name: "Libas Auto Rescue",
    href: "https://libasotokurtarma.com",
    githubUrl: "",
    description: "Oto kurtarma firması için geliştirilen kurumsal websitesi. 7/24 çekici hizmeti rezervasyonu yapılabilen modern bir arayüz.",
    screenshot: "/libas.png",
    technologies: ["Opencart", "PHP", "MySQL", "OpenCart Extensions" , "Twig", "cPanel"],
    type: "Website",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  }
]; 