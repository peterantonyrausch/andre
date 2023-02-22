import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilosFormGroupComponent } from './ailos-form-group.component';

describe('AilosFormGroupComponent', () => {
  let component: AilosFormGroupComponent;
  let fixture: ComponentFixture<AilosFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AilosFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AilosFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
