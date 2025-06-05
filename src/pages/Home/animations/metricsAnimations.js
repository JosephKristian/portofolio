import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const animateMetrics = (metricsSectionRef) => {
  if (!metricsSectionRef.current) return;

  const metrics = metricsSectionRef.current.querySelectorAll('.metric-item');

  metrics.forEach((metric, index) => {
    const valueElement = metric.querySelector('.metric-value');
    const targetValue = parseInt(valueElement?.getAttribute('data-value') || '0', 10);
    let currentValue = 0;

    gsap.from(metric, {
      scrollTrigger: {
        trigger: metricsSectionRef.current,
        start: 'top center',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 30,
      duration: 0.7,
      delay: index * 0.1,
      ease: 'back.out(1.2)',
      onComplete: () => {
        if (!valueElement) return;
        const counter = gsap.to({}, {
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            currentValue = Math.floor(counter.progress() * targetValue);
            valueElement.textContent = currentValue.toLocaleString();
          },
        });
      },
    });
  });
};
