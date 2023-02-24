import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCooperatedComponent } from './add-cooperated.component';

describe('AddCooperatedComponent', () => {
  let component: AddCooperatedComponent;
  let fixture: ComponentFixture<AddCooperatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCooperatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCooperatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
