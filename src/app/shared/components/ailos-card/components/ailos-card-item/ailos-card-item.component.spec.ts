import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilosCardItemComponent } from './ailos-card-item.component';

describe('AilosCardItemComponent', () => {
  let component: AilosCardItemComponent;
  let fixture: ComponentFixture<AilosCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AilosCardItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AilosCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
