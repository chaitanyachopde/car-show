import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const services = [
  {
    id: 1,
    icon: "fas fa-car",
    title: "Premium Sales",
    description: "Curated selection of luxury vehicles with transparent pricing and expert guidance.",
    gradient: "from-racing-red to-gold-accent"
  },
  {
    id: 2,
    icon: "fas fa-tools",
    title: "Expert Service",
    description: "Professional maintenance and repair services to keep your vehicle in peak condition.",
    gradient: "from-electric-blue to-gold-accent"
  },
  {
    id: 3,
    icon: "fas fa-handshake",
    title: "Financing",
    description: "Flexible financing options and trade-in programs tailored to your needs.",
    gradient: "from-racing-red to-electric-blue"
  },
  {
    id: 4,
    icon: "fas fa-headset",
    title: "24/7 Support",
    description: "Round-the-clock customer support and roadside assistance for peace of mind.",
    gradient: "from-gold-accent to-racing-red"
  }
];

export default function ServicesSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-charcoal to-deep-black relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-racing-red to-gold-accent bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive automotive solutions designed to exceed your expectations at every turn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`text-center group stagger-item ${isVisible ? 'animate' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
