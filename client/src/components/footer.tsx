export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-charcoal border-t border-gray-700 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-racing-red to-gold-accent rounded-full flex items-center justify-center">
                <i className="fas fa-car text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-racing-red to-gold-accent bg-clip-text text-transparent">
                CRC Car
              </span>
            </div>
            <p className="text-gray-400">
              Premium automotive experiences delivered with passion and precision.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-racing-red transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-racing-red transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-racing-red transition-colors">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-racing-red transition-colors">
                  Services
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-gray-400">Chaitanya Chopde</p>
              <p className="text-gray-400">+91 9970421551</p>
              <p className="text-gray-400">info@crccar.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 CRC Car. All rights reserved. Designed with passion for automotive excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
