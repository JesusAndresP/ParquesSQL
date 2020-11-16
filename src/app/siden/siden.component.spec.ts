import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenComponent } from './siden.component';

describe('SidenComponent', () => {
  let component: SidenComponent;
  let fixture: ComponentFixture<SidenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
