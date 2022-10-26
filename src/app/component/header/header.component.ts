import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/menu';
import { MenuService } from 'src/app/services/menu.service';
import { MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  menuList : Menu[] = [];
  constructor(private menuService : MenuService) { }

  ngOnInit(): void {
    this.menuList = this.menuService.getMenuList();
  }

}
