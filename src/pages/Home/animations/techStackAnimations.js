import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const animateTechStack = (techSectionRef) => {
  if (!techSectionRef.current) return;

  const techItems = techSectionRef.current.querySelectorAll('.tech-item');
  techItems.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: techSectionRef.current,
        start: 'top center',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      delay: index * 0.05,
      ease: 'power2.out',
    });
  });
};
