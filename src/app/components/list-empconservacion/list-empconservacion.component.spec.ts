import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpconservacionComponent } from './list-empconservacion.component';

describe('ListEmpconservacionComponent', () => {
  let component: ListEmpconservacionComponent;
  let fixture: ComponentFixture<ListEmpconservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmpconservacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmpconservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
