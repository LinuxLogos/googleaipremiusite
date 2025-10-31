import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#pourquoi-nous', label: 'Pourquoi nous ?' },
    { href: '#services', label: 'Nos Services' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-k-dark shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-k-white">
              K<span className="text-k-primary">o</span>neksi
            </h1>
          </a>

          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-medium text-k-light-gray hover:text-k-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-k-light-gray hover:text-k-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-max-height duration-500 ease-in-out md:hidden bg-k-dark/95 backdrop-blur-sm`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="block px-3 py-2 rounded-md text-base font-medium text-k-light-gray hover:text-k-white hover:bg-k-dark-gray"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
