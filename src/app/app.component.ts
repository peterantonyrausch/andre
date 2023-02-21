import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { UtilsService } from './core/services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentChecked {
  constructor(private utilsService: UtilsService) {}

  ngAfterContentChecked() {
    this.utilsService.setTitlePage('NOVA ADMISSÃO COOPERADO');
  }
}
