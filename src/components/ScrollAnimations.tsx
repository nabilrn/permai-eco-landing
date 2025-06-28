
import { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    // Scroll progress bar
    const updateScrollProgress = () => {
      const scrollProgress = document.querySelector('.scroll-progress') as HTMLElement;
      if (scrollProgress) {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight;
        const winHeight = window.innerHeight;
        const height = docHeight - winHeight;
        const scrolled = (scrollTop / height) * 100;
        scrollProgress.style.transform = `scaleX(${scrolled / 100})`;
      }
    };

    // Scroll animations for elements
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate');
        }
      });
    };

    // Parallax effect for hero section
    const parallaxScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax-scroll');
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach((element) => {
        const rate = scrolled * -0.5;
        (element as HTMLElement).style.transform = `translateY(${rate}px)`;
      });
    };

    const handleScroll = () => {
      updateScrollProgress();
      animateOnScroll();
      parallaxScroll();
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="scroll-progress"></div>;
};

export default ScrollAnimations;
