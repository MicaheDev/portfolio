import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
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
      path: '/',
      icon: 'ri-linkedin-line ',
      name: 'Linkedin',
    },
    {
      path: '/',
      icon: 'ri-github-line',
      name: 'Github',
    },
  ];
}
