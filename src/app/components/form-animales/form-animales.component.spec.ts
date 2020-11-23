import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAnimalesComponent } from './form-animales.component';

describe('FormAnimalesComponent', () => {
  let component: FormAnimalesComponent;
  let fixture: ComponentFixture<FormAnimalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAnimalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
