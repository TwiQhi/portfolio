import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background-dark/80 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-white">
              Portfolio
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/60 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <a href="#about" className="text-white/70 hover:text-white transition-colors">
              À propos
            </a>
            <a href="#projects" className="text-white/70 hover:text-white transition-colors">
              Projets
            </a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-background-dark/95 backdrop-blur-xl border-t border-white/10`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-white/70 hover:text-white hover:bg-white/10"
          >
            À propos
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 rounded-md text-white/70 hover:text-white hover:bg-white/10"
          >
            Projets
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-white/70 hover:text-white hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
