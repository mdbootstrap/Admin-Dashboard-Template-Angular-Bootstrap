import { NavItems, NavDrops } from './data';

export const NAVITEMS: NavItems[] = [
  { link: '', text: 'Publish changes', icon: 'fa-upload', number: 1 },
  { link: '', text: 'Contact', icon: 'fa-envelope', 'class': 'modalContactForm' },
  { link: '/brandflow-script', text: 'BrandFlow Script', icon: 'fa-code', number: 0 },
  { link: '/containers', text: 'Containers', icon: 'fa-cubes' }
];

export const NAVDROPS: NavDrops[] = [
  { text: 'Profile', icon: 'fa-user', navDropItems: [
    { link: '', text: 'Log Out', icon: 'fa-envelope' },
    { link: '', text: 'My account', icon: 'fa-code' }
  ] }
];
