import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

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

  parentFormGroup?: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.parentFormGroup = this.rootFormGroup.form;
  }
}
