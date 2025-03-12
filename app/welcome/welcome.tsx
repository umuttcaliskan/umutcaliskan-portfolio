import { useState, useEffect } from 'react';
import { Projects } from '../components/Projects';

export function Welcome() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // localStorage'dan tema tercihini al, yoksa sistem tercihini kullan
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');
    } else {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(isDarkMode ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    // Tema değiştiğinde localStorage'a kaydet
    localStorage.setItem('theme', theme);
    // Tema değiştiğinde body class'ını güncelle
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <main className={`min-h-screen ${theme === 'dark' ? 'bg-[#0F172A] text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Tema değiştirme butonu */}
      <button 
        onClick={toggleTheme} 
        className={`fixed top-6 right-6 p-3 rounded-full backdrop-blur-md shadow-lg transition-all duration-300 z-50 ${
          theme === 'dark' 
            ? 'bg-gray-800/50 text-yellow-300 hover:bg-gray-700/50' 
            : 'bg-white/50 text-gray-700 hover:bg-gray-100/50'
        }`}
        aria-label="Tema değiştir"
      >
        {theme === 'dark' ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Profil bölümü */}
        <div className="relative mb-24">
          <div className={`absolute inset-0 blur-[100px] opacity-30 ${theme === 'dark' ? 'bg-blue-600' : 'bg-blue-400'} rounded-full transform -translate-x-1/2 translate-y-1/2`} />
          <div className={`relative rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'} p-8 md:p-12`}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 opacity-75 group-hover:opacity-100 transition-opacity duration-500 blur-lg group-hover:blur-xl"></div>
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-white/10">
                  <img 
                    src="/Umut_Caliskan.jpeg" 
                    alt="Umut Çalışkan" 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                  Umut Çalışkan
                </h1>
                <div className="flex flex-col gap-4">
                  <p className={`text-2xl md:text-3xl mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Full-Stack Developer
                  </p>
                  <p className={`max-w-2xl text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    I am a developer specializing in React Native and React.js, focused on building scalable and high-
                    performance mobile and web applications. I have experience managing real-time data flows using RESTful
                    APIs, WebSocket, TypeScript, and Firebase integrations.
                  </p>
                  <p className={`max-w-2xl text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Additionally, I have strong expertise in MSSQL and database optimizations. My goal is to create secure,
                    user-friendly, and high-performance applications that deliver the best user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sosyal medya linkleri */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-24">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 backdrop-blur-md transform hover:-translate-y-1 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 hover:bg-gray-700/50'
                  : 'bg-white/50 hover:bg-gray-100/50'
              } shadow-lg hover:shadow-2xl`}
              aria-label={link.name}
            >
              {link.icon}
              <span className="text-lg font-medium">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Projeler bileşeni */}
        <Projects theme={theme} />

        {/* İletişim bölümü */}
        <div className="mt-24">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 pb-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            İletişim
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="mailto:umutcaliskann37@gmail.com" 
              className={`group flex items-center gap-6 p-8 rounded-2xl transition-all duration-300 backdrop-blur-md transform hover:-translate-y-1 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 hover:bg-gray-700/50'
                  : 'bg-white/50 hover:bg-gray-100/50'
              } shadow-lg hover:shadow-2xl`}
            >
              <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-100'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} transition-transform duration-300 group-hover:scale-110`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">E-posta</h3>
                <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>umutcaliskann37@gmail.com</span>
              </div>
            </a>
            <div className={`group flex items-center gap-6 p-8 rounded-2xl backdrop-blur-md ${
              theme === 'dark'
                ? 'bg-gray-800/50'
                : 'bg-white/50'
            } shadow-lg`}>
              <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-purple-600/20' : 'bg-purple-100'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Telefon</h3>
                <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>+90 535 369 86 89</span>
              </div>
            </div>
          </div>
        </div>

        <footer className={`mt-24 pt-8 text-center ${theme === 'dark' ? 'text-gray-400 border-gray-700' : 'text-gray-500 border-gray-200'} border-t`}>
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
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/umuttcaliskan",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd"></path>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/umutt.caliskan",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.236.585 1.789 1.14.556.555.89 1.122 1.14 1.788.248.637.417 1.363.465 2.428.047 1.023.06 1.379.06 3.808 0 2.43-.013 2.784-.06 3.808-.048 1.064-.217 1.791-.465 2.427-.25.668-.584 1.236-1.139 1.789-.556.556-1.123.89-1.79 1.14-.636.248-1.363.417-2.427.465-1.024.047-1.378.06-3.808.06-2.43 0-2.784-.013-3.808-.06-1.064-.048-1.791-.217-2.427-.465-.668-.25-1.236-.584-1.789-1.139-.556-.556-.89-1.123-1.14-1.79-.248-.636-.417-1.363-.465-2.427-.047-1.024-.06-1.378-.06-3.808 0-2.43.013-2.784.06-3.808.048-1.064.217-1.791.465-2.427.25-.668.584-1.236 1.14-1.789.555-.556 1.122-.89 1.788-1.14.636-.248 1.363-.417 2.427-.465 1.024-.047 1.378-.06 3.808-.06zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd"></path>
      </svg>
    ),
  },
];
