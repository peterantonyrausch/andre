import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilosToastComponent } from './ailos-toast.component';

describe('AilosToastComponent', () => {
  let component: AilosToastComponent;
  let fixture: ComponentFixture<AilosToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AilosToastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AilosToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
