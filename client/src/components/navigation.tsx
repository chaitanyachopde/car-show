import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-deep-black/95 backdrop-blur-md border-b border-gray-700' : ''
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-slideInLeft">
            <div className="w-10 h-10 bg-gradient-to-r from-racing-red to-gold-accent rounded-full flex items-center justify-center">
              <i className="fas fa-car text-white text-lg"></i>
            </div>
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-racing-red to-gold-accent bg-clip-text text-transparent">
              CRC Car
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-item text-white hover:text-racing-red transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-item text-white hover:text-racing-red transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('gallery')} className="nav-item text-white hover:text-racing-red transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('services')} className="nav-item text-white hover:text-racing-red transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-item text-white hover:text-racing-red transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white" onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu lg:hidden bg-deep-black border-t border-charcoal ${isMenuOpen ? 'open' : ''}`}>
        <div className="px-6 py-4 space-y-4">
          <button onClick={() => scrollToSection('home')} className="block text-white hover:text-racing-red transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="block text-white hover:text-racing-red transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('gallery')} className="block text-white hover:text-racing-red transition-colors">
            Gallery
          </button>
          <button onClick={() => scrollToSection('services')} className="block text-white hover:text-racing-red transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection('contact')} className="block text-white hover:text-racing-red transition-colors">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
