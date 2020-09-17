import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParquesComponent } from './list-parques.component';

describe('ListParquesComponent', () => {
  let component: ListParquesComponent;
  let fixture: ComponentFixture<ListParquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListParquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
