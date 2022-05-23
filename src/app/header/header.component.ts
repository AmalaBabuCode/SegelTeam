import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;

  navBarItems = [
    {
      item: 'About us',
      isActive: false,
    },
    {
      item: 'Gallery',
      isActive: true,
    },
    {
      item: 'Crew',
      isActive: false,
    },
    {
      item: 'Contact',
      isActive: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  changeItem(menu: string) {
    this.navBarItems.forEach((element) => {
      if (element.item === menu) {
        element.isActive = true;
      } else element.isActive = false;
    });
  }
}
