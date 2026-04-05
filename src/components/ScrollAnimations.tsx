import { useEffect } from "react";

const ScrollAnimations = () => {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollProgress = document.querySelector(
        ".scroll-progress"
      ) as HTMLElement;
      if (scrollProgress) {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight;
        const winHeight = window.innerHeight;
        const height = docHeight - winHeight;
        const scrolled = (scrollTop / height) * 100;
        scrollProgress.style.transform = `scaleX(${scrolled / 100})`;
      }
    };

    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate");
        }
      });
    };

    const handleScroll = () => {
      updateScrollProgress();
      animateOnScroll();
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="scroll-progress"></div>;
};

export default ScrollAnimations;
