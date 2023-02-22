import { Component, Input } from '@angular/core';

export interface IAilosStepperItem {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-ailos-stepper',
  templateUrl: './ailos-stepper.component.html',
  styleUrls: ['./ailos-stepper.component.css'],
})
export class AilosStepperComponent {
  @Input()
  list?: IAilosStepperItem[];
}
