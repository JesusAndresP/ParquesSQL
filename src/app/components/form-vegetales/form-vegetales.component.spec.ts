import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVegetalesComponent } from './form-vegetales.component';

describe('FormVegetalesComponent', () => {
  let component: FormVegetalesComponent;
  let fixture: ComponentFixture<FormVegetalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVegetalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVegetalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
