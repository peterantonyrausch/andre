import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Cooperated } from '../../../../core/models/cooperated.model';
import { UtilsService } from '../../../../core/services/utils.service';
import { CooperatedService } from '../../../../core/services/cooperated.service';
import { IAilosStepperItem } from '../../../../shared/components/ailos-stepper/ailos-stepper.component';

@Component({
  selector: 'app-create-cooperative',
  templateUrl: './create-cooperative.component.html',
  styleUrls: ['./create-cooperative.component.css'],
})
export class CreateCooperativeComponent implements OnInit {
  error = false;
  loading = false;
  formGroup?: FormGroup;
  cooperated?: Cooperated;
  stepperList?: IAilosStepperItem[];
  subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private utilsService: UtilsService,
    private cooperatedService: CooperatedService,
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
    this.loading = true;

    const params = this.formGroup?.value;

    this.subscription.add(
      this.cooperatedService.getByDocument(params.cpf).subscribe({
        next: (response) => {
          this.cooperated = response;
          this.error = false;
        },
        error: (error) => {
          this.error = true;
        },
        complete: () => {
          this.loading = false;
        },
      }),
    );
  }
}
