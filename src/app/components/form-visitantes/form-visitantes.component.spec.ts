import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVisitantesComponent } from './form-visitantes.component';

describe('FormVisitantesComponent', () => {
  let component: FormVisitantesComponent;
  let fixture: ComponentFixture<FormVisitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVisitantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVisitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
