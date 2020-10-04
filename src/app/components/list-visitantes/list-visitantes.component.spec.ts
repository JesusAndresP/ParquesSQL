import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVisitantesComponent } from './list-visitantes.component';

describe('ListVisitantesComponent', () => {
  let component: ListVisitantesComponent;
  let fixture: ComponentFixture<ListVisitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVisitantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVisitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
