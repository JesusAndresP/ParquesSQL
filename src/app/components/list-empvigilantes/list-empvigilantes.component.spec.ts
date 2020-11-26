import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpvigilantesComponent } from './list-empvigilantes.component';

describe('ListEmpvigilantesComponent', () => {
  let component: ListEmpvigilantesComponent;
  let fixture: ComponentFixture<ListEmpvigilantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmpvigilantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmpvigilantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
