import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Welcome to my Portfolio";
  const [showCursor, setShowCursor] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circles */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full floating"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full floating-slow"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-green-500/10 rounded-full floating-slower"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        
        {/* Code Snippets */}
        <div 
          className="absolute top-32 right-1/3 p-4 bg-white/5 backdrop-blur-sm rounded-lg floating"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <pre className="text-sm text-blue-400">{"const dev = '❤️';"}</pre>
        </div>
        <div 
          className="absolute bottom-32 right-1/4 p-4 bg-white/5 backdrop-blur-sm rounded-lg floating-slow"
          style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        >
          <pre className="text-sm text-green-400">{"<Portfolio />"}</pre>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            {text}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Frontend Developer | UI/UX Enthusiast | React Specialist
          </p>
          <div className="space-x-4">
            <button className="btn-primary">
              View Projects
            </button>
            <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
              Contact Me
            </button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
              <svg 
                className="animate-bounce w-6 h-6"
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;