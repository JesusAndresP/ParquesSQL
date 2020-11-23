import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVegetalesComponent } from './list-vegetales.component';

describe('ListVegetalesComponent', () => {
  let component: ListVegetalesComponent;
  let fixture: ComponentFixture<ListVegetalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVegetalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVegetalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
