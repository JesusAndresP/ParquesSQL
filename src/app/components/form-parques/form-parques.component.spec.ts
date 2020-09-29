import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormParquesComponent } from './form-parques.component';

describe('FormParquesComponent', () => {
  let component: FormParquesComponent;
  let fixture: ComponentFixture<FormParquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormParquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormParquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
