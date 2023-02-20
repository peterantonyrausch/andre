import { Component, OnInit } from '@angular/core';

interface NavigationItem {
  icon: string;
  routerLink: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  navigationList?: NavigationItem

  ngOnInit() {
  }

  loadNavigationList() {

  }
}
