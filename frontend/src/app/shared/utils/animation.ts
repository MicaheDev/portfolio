import { Router } from '@angular/router';
import gsap from 'gsap';

export const animatePageIn = () => {
  // Aseguramos que el fondo esté visible antes de la animación
  gsap.set('.background', { display: 'grid' });

  // Animación de desvanecimiento de cada elemento con la clase .block
  gsap.to('.block', {
    opacity: 0,
    delay: 0.8,
    duration: 0.1,
    stagger: { amount: 0.9, from: 'random' },
    onComplete: () => {
      // Opcionalmente puedes ocultar el fondo completamente después de la animación
      gsap.set('.background', { display: 'none' });
    },
  });
};

export const animatePageOut = (context: Element, href: string, router: Router) => {
  gsap.context(() => {
    // Aseguramos que el fondo esté visible antes de la animación
    gsap.set('.background', { display: 'grid' });

    // Animación de desvanecimiento inverso (de opacidad 0 a 1) para los .block
    gsap.to('.block', {
      opacity: 1,
      duration: 0.1,
      stagger: { amount: 0.5, from: 'random' },
      onComplete: () => {
        // Redirigir después de completar la animación
        router.navigateByUrl(href, { replaceUrl: true });
      },
    });
  }, context);
};
