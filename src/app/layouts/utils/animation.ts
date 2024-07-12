import { Router } from '@angular/router';
import gsap from 'gsap';

export const animatePageIn = (context: Element) => {
  gsap.context(() => {
    const tl = gsap.timeline();

    tl.set(['#banner-1', '#banner-2', '#banner-3', '#banner-4'], {
      yPercent: 0,
    }).to(['#banner-1', '#banner-2', '#banner-3', '#banner-4'], {
      yPercent: '100',
      stagger: 0.2,
    });
  }, context);
};

export const animatePageOut = (
  context: Element,
  href: string,
  router: Router
) => {
  gsap.context(() => {
    const tl = gsap.timeline();

    tl.set(['#banner-1', '#banner-2', '#banner-3', '#banner-4'], {
      yPercent: -100,
    }).to(['#banner-1', '#banner-2', '#banner-3', '#banner-4'], {
      yPercent: 0,
      stagger: 0.2,
      onComplete: () => {
        router.navigateByUrl(href, { replaceUrl: true });
      },
    });
  }, context);
};
