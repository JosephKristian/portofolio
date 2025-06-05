import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const setupProjectCardAnimations = (cardRefs) => {
  cardRefs.current.forEach((card, index) => {
    if (!card) return;

    const overlay = card.querySelector('.project-overlay');
    const content = card.querySelector('.project-content');
    if (!overlay || !content) return;

    gsap.set(overlay, { opacity: 0 });
    gsap.set(content, { y: 20 });

    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
        toggleActions: 'play reverse play reverse',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'back.out(1.2)',
    });

    const onCardEnter = () => {
      gsap.to(overlay, { opacity: 1, duration: 0.4, ease: 'power2.out' });
      gsap.to(content, { y: 0, duration: 0.5, ease: 'power3.out' });
    };

    const onCardLeave = () => {
      gsap.to(overlay, { opacity: 0, duration: 0.3, ease: 'power2.in' });
      gsap.to(content, { y: 20, duration: 0.4, ease: 'power3.in' });
    };

    card.addEventListener('mouseenter', onCardEnter);
    card.addEventListener('mouseleave', onCardLeave);

    card._gsapOnEnter = onCardEnter;
    card._gsapOnLeave = onCardLeave;
  });
};

export const cleanupProjectCardAnimations = (cardRefs) => {
  cardRefs.current.forEach(card => {
    if (card?._gsapOnEnter && card._gsapOnLeave) {
      card.removeEventListener('mouseenter', card._gsapOnEnter);
      card.removeEventListener('mouseleave', card._gsapOnLeave);
    }
  });
};
