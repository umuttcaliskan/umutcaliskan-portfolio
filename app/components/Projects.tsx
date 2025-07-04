import { useState } from 'react';
import React from 'react';

interface Project {
  name: string;
  href: string;
  githubUrl: string;
  apkUrl?: string;
  extensionUrl?: string;
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
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {websites.map((website) => (
          <div
            key={website.name}
            className={`group relative rounded-xl overflow-hidden backdrop-blur-md transition-all duration-300 border ${
              theme === 'dark'
                ? 'bg-gray-800/50 hover:bg-gray-700/50 border-gray-700'
                : 'bg-white/50 hover:bg-gray-100/50 border-gray-200'
            } shadow-lg hover:shadow-2xl transform hover:-translate-y-1`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden">
                <div className="w-full h-full relative bg-gray-100 flex items-center justify-center">
                  {website.screenshot ? (
                    <img 
                      src={website.screenshot} 
                      alt={`${website.name} ekran görüntüsü`} 
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="inline-block text-blue-500">{website.icon}</span>
                    <span className="line-clamp-1">{website.name}</span>
                  </h3>
                  <span className={`inline-block px-2.5 py-0.5 text-xs rounded-full font-medium ${
                    theme === 'dark' 
                      ? 'bg-blue-600/20 text-blue-400' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {website.type}
                  </span>
                </div>
                
                <p className={`text-sm line-clamp-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {website.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {website.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-2 py-0.5 text-xs rounded-md ${
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
                      className={`z-10 relative px-2 py-0.5 text-xs rounded-md transition-all duration-300 hover:scale-105 ${
                        theme === 'dark'
                          ? 'bg-gray-700 text-blue-300 hover:bg-gray-600'
                          : 'bg-gray-100 text-blue-700 hover:bg-gray-200'
                      }`}
                    >
                      +{website.technologies.length - 3} Daha
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  <a
                    href={website.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`z-10 relative flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-sm transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-blue-500 hover:bg-blue-600'
                    } text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Live</span>
                  </a>
                  {website.githubUrl && (
                    <a
                      href={website.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`z-10 relative flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-sm transition-all duration-300 ${
                        theme === 'dark'
                          ? 'bg-gray-700 hover:bg-gray-600'
                          : 'bg-gray-200 hover:bg-gray-300'
                      } shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                  {website.apkUrl && (
                    <a
                      href={website.apkUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`z-10 relative flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-sm transition-all duration-300 ${
                        theme === 'dark'
                          ? 'bg-green-600 hover:bg-green-700'
                          : 'bg-green-500 hover:bg-green-600'
                      } text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span>APK</span>
                    </a>
                  )}
                  {website.extensionUrl && (
                    <a
                      href={website.extensionUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`z-10 relative flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-sm transition-all duration-300 ${
                        theme === 'dark'
                          ? 'bg-purple-600 hover:bg-purple-700'
                          : 'bg-purple-500 hover:bg-purple-600'
                      } text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span>Extension</span>
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
    name: "Cv-Gen | CV Generator",
    href: "https://cvgen.com.tr",
    githubUrl: "https://github.com/umuttcaliskan/CvGen-Web.git",
    description: "CV-Gen web version: A user-friendly platform for creating professional resumes.",
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
    name: "Cv-Gen | CV Generator",
    href: "https://play.google.com/store/apps/details?id=com.picksoso.cvgen",
    githubUrl: "https://github.com/umuttcaliskan/CvGen.git",
    apkUrl: "/apk/CvGen.apk",
    description: "A mobile application that enables you to create a professional resume and offers customizable templates.",
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
    name: "QR-Gen | QR Code Generator",
    href: "https://play.google.com/store/apps/details?id=com.picksoso.qrgen",
    githubUrl: "https://github.com/umuttcaliskan/QR-Gen",
    apkUrl: "/apk/QR-Gen.apk",
    description: "A comprehensive mobile application that allows users to create, customize, and manage QR codes.",
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
    name: "Calculation Center",
    href: "",
    githubUrl: "https://github.com/umuttcaliskan/HesapMerkezim.git",
    extensionUrl: "/apk/dist.crx",
    description: "A practical Google Chrome extension that provides quick and easy access to daily calculations!",
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
    description: "My personal portfolio website showcasing my projects, skills, and experience.",
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
    name: "Mulky",
    href: "https://mulky.com.tr",
    githubUrl: "",
    description: "A property, tenant, site, and hotel management platform I developed at Finis Software.",
    screenshot: "/mulky.png",
    technologies: ["Django", "React Native & Expo", "Nativewind", "TypeScript"],
    type: "Website and Mobile",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    name: "Emre Gürsoy Life",
    href: "https://emregursoy.life",
    githubUrl: "",
    description: "Professional coaching services for personal and professional development.",
    screenshot: "/emregursoy.png",
    technologies: ["Wordpress", "cPanel"],
    type: "Website",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    name: "The Title Agency",
    href: "https://thetitleajans.com",
    githubUrl: "",
    description: "A creative agency website I developed at Dashy, providing professional digital solutions and branding services.",
    screenshot: "/thetitleajans.png",
    technologies: ["Wordpress", "cPanel"],
    type: "Website",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    name: "ECF Gift Store",
    href: "https://ecfhediyelik.com",
    githubUrl: "",
    description: "An e-commerce platform specialized in the sale of gift items and housewares products.",
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
    description: "A professional corporate website designed for a roadside assistance company.",
    screenshot: "/libas.png",
    technologies: ["Opencart", "PHP", "MySQL", "OpenCart Extensions" , "Twig", "cPanel"],
    type: "Website",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  
]; 