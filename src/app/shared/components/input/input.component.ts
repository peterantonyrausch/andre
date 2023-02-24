import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { debounceTime, delay, Subscription } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input()
  type = '';
  @Input()
  placeholder = '';
  @Input()
  controlName = '';
  @Input()
  mask = '';
  @Input()
  className = '';
  @Input()
  error = false;
  @Input()
  errorMessage = '';
  isInvalid = false;
  subscription = new Subscription();

  parentFormGroup?: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.parentFormGroup = this.rootFormGroup.form;
    this.listenIfInputIsEmpty();
  }

  listenIfInputIsEmpty() {
    this.subscription.add(
      this.inputControl?.valueChanges.pipe(debounceTime(300)).subscribe({
        next: (value: string | null) => {
          console.log(value);
          if (this.inputControl?.invalid && this.inputControl?.dirty) {
            return (this.isInvalid = true);
          }

          return (this.isInvalid = false);
        },
      }),
    );
  }

  get inputControl(): AbstractControl | undefined {
    return this.parentFormGroup?.controls[this.controlName];
  }
}
