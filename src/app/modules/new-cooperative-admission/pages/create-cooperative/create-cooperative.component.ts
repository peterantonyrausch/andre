import { Component, OnInit } from '@angular/core';

import { UtilsService } from '../../../../core/services/utils.service';
import { IAilosStepperItem } from '../../../../shared/components/ailos-stepper/ailos-stepper.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-cooperative',
  templateUrl: './create-cooperative.component.html',
  styleUrls: ['./create-cooperative.component.css'],
})
export class CreateCooperativeComponent implements OnInit {
  formGroup?: FormGroup;
  stepperList?: IAilosStepperItem[];

  constructor(
    private formBuilder: FormBuilder,
    private utilsService: UtilsService,
  ) {}

  ngOnInit() {
    this.utilsService.setTitlePage('NOVA ADMISSÃO COOPERADO');
    this.loadStepperList();
    this.mountFormGroup();
  }

  loadStepperList() {
    this.stepperList = [
      { name: 'Início', selected: true },
      { name: 'Documentos', selected: false },
      { name: 'Dados cadastrais', selected: false },
      { name: 'Admissão', selected: false },
    ];
  }

  mountFormGroup() {
    this.formGroup = this.formBuilder.group({
      cpf: [null, [Validators.required]],
    });
  }

  searchCPF() {
    console.log('teste');
  }

  onSubmit() {}
}
