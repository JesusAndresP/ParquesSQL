import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmpvigilantesComponent } from './form-empvigilantes.component';

describe('FormEmpvigilantesComponent', () => {
  let component: FormEmpvigilantesComponent;
  let fixture: ComponentFixture<FormEmpvigilantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEmpvigilantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmpvigilantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
