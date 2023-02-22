import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ailos-card',
  templateUrl: './ailos-card.component.html',
  styleUrls: ['./ailos-card.component.css'],
})
export class AilosCardComponent {
  @Input()
  title?: string;
  @Input()
  subTitle?: string;
}
