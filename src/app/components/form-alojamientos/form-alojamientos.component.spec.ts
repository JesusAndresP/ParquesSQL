import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlojamientosComponent } from './form-alojamientos.component';

describe('FormAlojamientosComponent', () => {
  let component: FormAlojamientosComponent;
  let fixture: ComponentFixture<FormAlojamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAlojamientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlojamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
