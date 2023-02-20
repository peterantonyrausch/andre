import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilosLayoutComponent } from './ailos-layout.component';

describe('AilosLayoutComponent', () => {
  let component: AilosLayoutComponent;
  let fixture: ComponentFixture<AilosLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AilosLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AilosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
