import { Component, OnInit } from '@angular/core';

interface NavigationItem {
  icon: string;
  routerLink: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  navigationList?: NavigationItem[];

  ngOnInit() {
    this.navigationList = this.loadNavigationList();
  }

  loadNavigationList() {
    return [
      { icon: 'search', routerLink: '' },
      { icon: 'star', routerLink: '' },
      { icon: 'sms', routerLink: '' },
      { icon: 'sms', routerLink: '' },
      { icon: 'account_balance', routerLink: '' },
    ];
  }
}
