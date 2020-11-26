import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVisitasComponent } from './list-visitas.component';

describe('ListVisitasComponent', () => {
  let component: ListVisitasComponent;
  let fixture: ComponentFixture<ListVisitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVisitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
