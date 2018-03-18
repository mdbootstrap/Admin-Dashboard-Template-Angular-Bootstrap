import { Injectable } from '@angular/core';
import { NavItems, NavDrops } from './data';
import { NAVDROPS, NAVITEMS } from './navbar-data';

@Injectable()
export class NavbarService {

  getNavItems(): NavItems[] {
    return NAVITEMS;
  }

  getNavDrops(): NavDrops[] {
    return NAVDROPS;
  }

}
