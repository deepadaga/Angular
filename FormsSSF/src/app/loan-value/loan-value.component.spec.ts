import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanValueComponent } from './loan-value.component';

describe('LoanValueComponent', () => {
  let component: LoanValueComponent;
  let fixture: ComponentFixture<LoanValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
