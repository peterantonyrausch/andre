import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  pageTitle = '';
  subscription = new Subscription();

  constructor(private utilsService: UtilsService) {}

  ngOnInit() {
    this.loadPageTitle();
  }

  loadPageTitle() {
    this.subscription.add(
      this.utilsService.getTitlePage().subscribe({
        next: (title) => {
          this.pageTitle = title;
        },
      }),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe && this.subscription.unsubscribe();
  }
}
