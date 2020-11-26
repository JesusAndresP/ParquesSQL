import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmpinvestigacionComponent } from './form-empinvestigacion.component';

describe('FormEmpinvestigacionComponent', () => {
  let component: FormEmpinvestigacionComponent;
  let fixture: ComponentFixture<FormEmpinvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEmpinvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmpinvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
