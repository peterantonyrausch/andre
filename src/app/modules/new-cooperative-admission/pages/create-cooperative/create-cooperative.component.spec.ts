import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCooperativeComponent } from './create-cooperative.component';

describe('CreateCooperativeComponent', () => {
  let component: CreateCooperativeComponent;
  let fixture: ComponentFixture<CreateCooperativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCooperativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCooperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
