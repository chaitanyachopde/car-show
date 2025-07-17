export default function FloatingContact() {
  const callNow = () => {
    window.open('tel:+919970421551', '_self');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float-bounce">
      <button
        onClick={callNow}
        className="w-16 h-16 bg-gradient-to-r from-racing-red to-gold-accent rounded-full flex items-center justify-center text-white text-xl shadow-2xl hover:scale-110 transition-transform duration-300"
        aria-label="Call now"
      >
        <i className="fas fa-phone"></i>
      </button>
    </div>
  );
}
