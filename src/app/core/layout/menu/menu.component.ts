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
    // TODO: fix icons to be outlined and find some icon for the 4 item
    return [
      { icon: 'search', routerLink: '' },
      { icon: 'grade', routerLink: '' },
      { icon: 'sms', routerLink: '' },
      { icon: 'sms', routerLink: '' },
      { icon: 'account_balance', routerLink: '' },
    ];
  }
}
