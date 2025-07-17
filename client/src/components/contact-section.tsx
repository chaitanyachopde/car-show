import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! We will contact you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-deep-black relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={ref} className={`reveal ${isVisible ? 'active' : ''}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-racing-red to-gold-accent bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Ready to experience luxury like never before? Contact us today and let's discuss how CRC Car can serve your automotive needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-racing-red to-gold-accent rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-white"></i>
                </div>
                <div>
                  <p className="text-gray-400">Owner</p>
                  <p className="text-white font-semibold text-lg">Chaitanya Chopde</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-gold-accent rounded-full flex items-center justify-center">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white font-semibold text-lg">+91 9970421551</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-racing-red to-electric-blue rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white font-semibold text-lg">info@crccar.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`reveal ${isVisible ? 'active' : ''}`}>
            <div className="bg-charcoal/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name" 
                    required
                    className="w-full bg-deep-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-racing-red focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email" 
                    required
                    className="w-full bg-deep-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-racing-red focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone" 
                    className="w-full bg-deep-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-racing-red focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message" 
                    rows={4}
                    required
                    className="w-full bg-deep-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-racing-red focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-racing-red to-gold-accent text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
