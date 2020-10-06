import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormEspeciesComponent} from './form-especies.component';

describe('FormParquesComponent', () => {
  let component: FormEspeciesComponent;
  let fixture: ComponentFixture<FormEspeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEspeciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
