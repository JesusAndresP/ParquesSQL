import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlojamientosComponent } from './list-alojamientos.component';

describe('ListAlojamientosComponent', () => {
  let component: ListAlojamientosComponent;
  let fixture: ComponentFixture<ListAlojamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAlojamientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlojamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
