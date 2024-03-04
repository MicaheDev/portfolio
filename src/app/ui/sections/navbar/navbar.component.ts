import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 10) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  routes = [
    {
      path: '/',
      icon: 'ri-home-4-line',
      name: 'Home',
    },

    {
      path: '/',
      icon: 'ri-briefcase-2-line',
      name: 'Experience',
    },
    {
      path: '/',
      icon: 'ri-terminal-box-line',
      name: 'Projects',
    },
    {
      path: '/',
      icon: 'ri-book-marked-line',
      name: 'Education',
    },
    {
      path: '/',
      icon: 'ri-mail-send-line',
      name: 'Contact',
    },
  ];

  socialMedia = [
    {
      path: 'https://linkedin.com/in/michellcastillo29',
      icon: 'ri-linkedin-line ',
      name: 'Linkedin',
    },
    {
      path: 'https://github.com/MicaheDev',
      icon: 'ri-github-line',
      name: 'Github',
    },
  ];
}
