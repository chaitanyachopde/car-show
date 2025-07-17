import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    // Text reveal animation
    const textElements = document.querySelectorAll('.text-reveal h1, .text-reveal h2, .text-reveal p');
    textElements.forEach(element => {
      const text = element.textContent || '';
      const spans = text.split('').map(char => `<span>${char === ' ' ? '&nbsp;' : char}</span>`).join('');
      element.innerHTML = spans;
    });

    setTimeout(() => {
      document.querySelectorAll('.text-reveal').forEach(element => {
        element.classList.add('active');
      });
    }, 500);

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.hero-bg');
      parallaxElements.forEach(element => {
        const speed = 0.5;
        (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const callNow = () => {
    window.open('tel:+919970421551', '_self');
  };

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-black/20 to-deep-black/80"></div>
      
      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-reveal mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-gold-accent to-racing-red bg-clip-text text-transparent">
                Premium Cars
              </span>
            </h1>
          </div>
          <div className="text-reveal mb-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
              <span className="text-white">Exceptional Experience</span>
            </h2>
          </div>
          <div className="text-reveal mb-8">
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              <span>Discover luxury automobiles with CRC Car. We provide premium vehicles and exceptional service for the ultimate driving experience.</span>
            </p>
          </div>
          <div className="animate-slideInUp flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToGallery}
              className="bg-gradient-to-r from-racing-red to-gold-accent hover:from-gold-accent hover:to-racing-red text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 animate-glow"
            >
              <i className="fas fa-car mr-2"></i>
              Explore Cars
            </button>
            <button 
              onClick={callNow}
              className="border-2 border-white/30 hover:border-racing-red text-white hover:text-racing-red px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-phone mr-2"></i>
              Call Now
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
