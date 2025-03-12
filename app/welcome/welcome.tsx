import { useState, useEffect } from 'react';
import { Projects } from '../components/Projects';

export function Welcome() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      } else {
        setTheme('dark'); // Sistem teması light olsa bile dark tema kullan
      }
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <main className={`min-h-screen overflow-x-hidden ${theme === 'dark' ? 'bg-[#0F172A] text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Tema değiştirme butonu */}
        <div className="fixed top-4 right-4 z-50">
          <button 
            onClick={toggleTheme} 
            className={`p-2 md:p-3 rounded-full backdrop-blur-md shadow-lg transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-gray-800/50 text-yellow-300 hover:bg-gray-700/50' 
                : 'bg-white/50 text-gray-700 hover:bg-gray-100/50'
            }`}
            aria-label="Tema değiştir"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        {/* Profil bölümü */}
        <div className="relative mb-20">
          <div className={`absolute inset-0 blur-3xl opacity-30 ${theme === 'dark' ? 'bg-blue-600' : 'bg-blue-400'} rounded-full transform -translate-x-1/2 translate-y-1/2`} />
          <div className={`relative rounded-2xl overflow-hidden backdrop-blur-md shadow-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'} p-8 md:p-12`}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
                  <img 
                    src="/Umut_Caliskan.jpeg" 
                    alt="Umut Çalışkan" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Umut Çalışkan
                </h1>
                <p className={`text-xl md:text-2xl mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Full-Stack Developer
                </p>
                <p className={`max-w-2xl text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                I am a developer specializing in React Native and React.js, focused on building scalable and high-
performance mobile and web applications. I have experience managing real-time data flows using RESTful
APIs, WebSocket, TypeScript, and Firebase integrations. Additionally, I have strong expertise in MSSQL and
database optimizations. My goal is to create secure, user-friendly, and high-performance applications that
deliver the best user experience. I enjoy learning new technologies, solving complex problems, and
developing efficient solutions with modern software architectures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sosyal medya linkleri */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-20">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 backdrop-blur-md ${
                theme === 'dark'
                  ? 'bg-gray-800/50 hover:bg-gray-700/50'
                  : 'bg-white/50 hover:bg-gray-100/50'
              } shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
              aria-label={link.name}
            >
              {link.icon}
              <span className="text-lg">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Projeler bileşeni */}
        <Projects theme={theme} />

        {/* İletişim bölümü */}
        <div className="relative">
          <div className={`absolute inset-0 blur-3xl opacity-30 ${theme === 'dark' ? 'bg-blue-600' : 'bg-blue-400'} rounded-full transform translate-x-1/2 -translate-y-1/2`} />
          <div className={`relative rounded-2xl overflow-hidden backdrop-blur-md shadow-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'} p-8 md:p-12`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              İletişim
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* İletişim Bilgileri */}
              <div className="space-y-6">
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                  İletişim Bilgileri
                </h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:umutcaliskann37@gmail.com" 
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gray-700/50 hover:bg-gray-600/50'
                        : 'bg-gray-100/50 hover:bg-gray-200/50'
                    } group`}
                  >
                    <div className={`p-3 rounded-lg ${
                      theme === 'dark' 
                        ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30' 
                        : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                    } transition-colors duration-300`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>E-posta</div>
                      <div className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                        umutcaliskann37@gmail.com
                      </div>
                    </div>
                  </a>

                  <div className={`flex items-center gap-4 p-4 rounded-xl ${
                    theme === 'dark'
                      ? 'bg-gray-700/50'
                      : 'bg-gray-100/50'
                  }`}>
                    <div className={`p-3 rounded-lg ${
                      theme === 'dark' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-green-100 text-green-600'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Telefon</div>
                      <div className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                        +90 535 369 86 89
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sosyal Medya */}
              <div className="space-y-6">
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                  Sosyal Medya
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                        theme === 'dark'
                          ? 'bg-gray-700/50 hover:bg-gray-600/50'
                          : 'bg-gray-100/50 hover:bg-gray-200/50'
                      } group`}
                    >
                      <div className={`p-2 rounded-lg ${
                        theme === 'dark' 
                          ? 'bg-gray-600/50 text-gray-300 group-hover:bg-gray-500/50' 
                          : 'bg-gray-200/50 text-gray-600 group-hover:bg-gray-300/50'
                      } transition-colors duration-300`}>
                        {link.icon}
                      </div>
                      <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className={`mt-20 pt-8 text-center ${theme === 'dark' ? 'text-gray-400 border-gray-700' : 'text-gray-500 border-gray-200'} border-t`}>
          <p>© {new Date().getFullYear()} Umut Çalışkan. Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </main>
  );
}

// Sosyal medya linkleri
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/umuttcaliskan",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/umuttcaliskan",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd"></path>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/umutt.caliskan",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.236.585 1.789 1.14.556.555.89 1.122 1.14 1.788.248.637.417 1.363.465 2.428.047 1.023.06 1.379.06 3.808 0 2.43-.013 2.784-.06 3.808-.048 1.064-.217 1.791-.465 2.427-.25.668-.584 1.236-1.139 1.789-.556.556-1.123.89-1.79 1.14-.636.248-1.363.417-2.427.465-1.024.047-1.378.06-3.808.06-2.43 0-2.784-.013-3.808-.06-1.064-.048-1.791-.217-2.427-.465-.668-.25-1.236-.584-1.789-1.139-.556-.556-.89-1.123-1.14-1.79-.248-.636-.417-1.363-.465-2.427-.047-1.024-.06-1.378-.06-3.808 0-2.43.013-2.784.06-3.808.048-1.064.217-1.791.465-2.427.25-.668.584-1.236 1.14-1.789.555-.556 1.122-.89 1.788-1.14.636-.248 1.363-.417 2.427-.465 1.024-.047 1.378-.06 3.808-.06zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd"></path>
      </svg>
    ),
  },
];
