import { gsap } from 'gsap';

export const animateHero = (heroRef) => {
  if (heroRef.current) {
    gsap.from(heroRef.current, {
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    });
  }
};
