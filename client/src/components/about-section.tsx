import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-deep-black to-charcoal relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={ref} className={`reveal ${isVisible ? 'active' : ''}`}>
            <img 
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional automotive team" 
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className={`reveal ${isVisible ? 'active' : ''}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-racing-red to-gold-accent bg-clip-text text-transparent">
              About CRC Car
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Chaitanya Chopde - Founder
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Welcome to CRC Car, where passion meets precision. Under the leadership of Chaitanya Chopde, we've built a reputation for excellence in the automotive industry.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Our commitment to quality, innovation, and customer satisfaction has made us a trusted name in premium automotive solutions. From luxury cars to exceptional service, we deliver experiences that exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-gradient-to-r from-racing-red/20 to-gold-accent/20 border border-racing-red/30 rounded-lg p-4 flex items-center space-x-3">
                <i className="fas fa-phone text-racing-red text-xl"></i>
                <div>
                  <p className="text-gray-400 text-sm">Contact Us</p>
                  <p className="text-white font-semibold">+91 9970421551</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-electric-blue/20 to-gold-accent/20 border border-electric-blue/30 rounded-lg p-4 flex items-center space-x-3">
                <i className="fas fa-award text-electric-blue text-xl"></i>
                <div>
                  <p className="text-gray-400 text-sm">Years of Excellence</p>
                  <p className="text-white font-semibold">10+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
