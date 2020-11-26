import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpinvestigacionComponent } from './list-empinvestigacion.component';

describe('ListEmpinvestigacionComponent', () => {
  let component: ListEmpinvestigacionComponent;
  let fixture: ComponentFixture<ListEmpinvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmpinvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmpinvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
