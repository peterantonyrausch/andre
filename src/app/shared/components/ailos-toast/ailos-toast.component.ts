import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ailos-toast',
  templateUrl: './ailos-toast.component.html',
  styleUrls: ['./ailos-toast.component.css'],
})
export class AilosToastComponent {
  @Input()
  text = '';
}
