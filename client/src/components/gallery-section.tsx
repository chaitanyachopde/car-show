import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const cars = [
  {
    id: 1,
    title: "Luxury Sports",
    description: "Experience the thrill of high-performance engineering.",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 2,
    title: "Executive Sedan",
    description: "Perfect blend of comfort and sophistication.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 3,
    title: "Premium SUV",
    description: "Commanding presence with unmatched capability.",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 4,
    title: "Convertible",
    description: "Open-air driving experience with style.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 5,
    title: "Electric Future",
    description: "Sustainable luxury with cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 6,
    title: "Classic Collection",
    description: "Timeless elegance meets modern reliability.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  }
];

export default function GallerySection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-charcoal relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-racing-red to-gold-accent bg-clip-text text-transparent">
            Our Collection
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our curated selection of premium vehicles, each offering unparalleled luxury and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div 
              key={car.id} 
              className={`car-card bg-deep-black rounded-xl overflow-hidden stagger-item ${isVisible ? 'animate' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={car.image}
                alt={car.title}
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{car.title}</h3>
                <p className="text-gray-400 mb-4">{car.description}</p>
                <button className="bg-gradient-to-r from-racing-red to-gold-accent text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
