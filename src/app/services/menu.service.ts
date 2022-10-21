import { Injectable } from '@angular/core';
import { Menu } from '../model/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuList : Menu[] = [];
  constructor() { 
    this.menuList.push(new Menu("Home", 1, "/home"));
    this.menuList.push(new Menu("About Us", 2, "/about"));
    this.menuList.push(new Menu("Events", 3, "/events"));
    this.menuList.push(new Menu("Gallery", 4, "/gallery"));
    this.menuList.push(new Menu("Our Team", 5, "/team"));
    this.menuList.push(new Menu("Contact Us", 6, "/contact"));
  }

  getMenuList(){
    return this.menuList;
  }
}
