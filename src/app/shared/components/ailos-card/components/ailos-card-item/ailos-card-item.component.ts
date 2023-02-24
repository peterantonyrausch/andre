import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ailos-card-item',
  templateUrl: './ailos-card-item.component.html',
  styleUrls: ['./ailos-card-item.component.css'],
})
export class AilosCardItemComponent {
  @Input()
  label = '';
  @Input()
  description = '';
  @Input()
  type = '';
}
