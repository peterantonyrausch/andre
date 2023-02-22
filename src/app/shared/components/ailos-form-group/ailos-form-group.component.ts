import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ailos-form-group',
  templateUrl: './ailos-form-group.component.html',
  styleUrls: ['./ailos-form-group.component.css'],
})
export class AilosFormGroupComponent {
  @Input()
  label = '';
}
