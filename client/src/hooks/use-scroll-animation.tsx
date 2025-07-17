import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    // Throttled scroll handler for performance
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Parallax effect for hero background
          const scrolled = window.pageYOffset;
          const parallaxElements = document.querySelectorAll('.hero-bg');
          parallaxElements.forEach(element => {
            const speed = 0.5;
            (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Intersection Observer for reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          // Stagger animation for items
          const staggerItems = entry.target.querySelectorAll('.stagger-item');
          staggerItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe all reveal elements
    document.querySelectorAll('.reveal').forEach(element => {
      observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);
}
