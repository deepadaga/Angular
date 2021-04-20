import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcquoteComponent } from './calcquote.component';

describe('CalcquoteComponent', () => {
  let component: CalcquoteComponent;
  let fixture: ComponentFixture<CalcquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcquoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
