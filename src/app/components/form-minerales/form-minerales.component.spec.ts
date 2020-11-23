import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMineralesComponent } from './form-minerales.component';

describe('FormMineralesComponent', () => {
  let component: FormMineralesComponent;
  let fixture: ComponentFixture<FormMineralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMineralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMineralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
