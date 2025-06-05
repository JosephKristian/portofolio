import { gsap } from 'gsap';

export const setupButtonAnimations = (buttonRefs) => {
  buttonRefs.current.forEach(button => {
    if (!button) return;

    const text = button.querySelector('span');
    const hoverBg = button.querySelector('div');
    if (!text || !hoverBg) return;

    gsap.set(hoverBg, { scaleX: 0, transformOrigin: 'left center' });

    const onEnter = () => {
      gsap.to(hoverBg, { scaleX: 1, duration: 0.6, ease: 'power2.out' });
      gsap.to(text, { y: -2, duration: 0.3, ease: 'power2.out' });
    };

    const onLeave = () => {
      gsap.to(hoverBg, { scaleX: 0, duration: 0.4, ease: 'power2.in' });
      gsap.to(text, { y: 0, duration: 0.3, ease: 'power2.out' });
    };

    button.addEventListener('mouseenter', onEnter);
    button.addEventListener('mouseleave', onLeave);

    button._gsapOnEnter = onEnter;
    button._gsapOnLeave = onLeave;
  });
};

export const cleanupButtonAnimations = (buttonRefs) => {
  buttonRefs.current.forEach(button => {
    if (button?._gsapOnEnter && button._gsapOnLeave) {
      button.removeEventListener('mouseenter', button._gsapOnEnter);
      button.removeEventListener('mouseleave', button._gsapOnLeave);
    }
  });
};
