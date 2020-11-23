import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnimalesComponent } from './list-animales.component';

describe('ListAnimalesComponent', () => {
  let component: ListAnimalesComponent;
  let fixture: ComponentFixture<ListAnimalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAnimalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
