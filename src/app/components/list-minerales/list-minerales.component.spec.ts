import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMineralesComponent } from './list-minerales.component';

describe('ListMineralesComponent', () => {
  let component: ListMineralesComponent;
  let fixture: ComponentFixture<ListMineralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMineralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMineralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
