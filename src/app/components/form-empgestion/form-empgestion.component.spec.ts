import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmpgestionComponent } from './form-empgestion.component';

describe('FormEmpgestionComponent', () => {
  let component: FormEmpgestionComponent;
  let fixture: ComponentFixture<FormEmpgestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEmpgestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmpgestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
