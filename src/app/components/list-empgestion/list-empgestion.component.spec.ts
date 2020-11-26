import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpgestionComponent } from './list-empgestion.component';

describe('ListEmpgestionComponent', () => {
  let component: ListEmpgestionComponent;
  let fixture: ComponentFixture<ListEmpgestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmpgestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmpgestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
