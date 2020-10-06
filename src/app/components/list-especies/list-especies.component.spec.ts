import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEspeciesComponent } from './list-especies.component';

describe('ListEspeciesComponent', () => {
  let component: ListEspeciesComponent;
  let fixture: ComponentFixture<ListEspeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEspeciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
