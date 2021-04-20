import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivQuoteComponent } from './div-quote.component';

describe('DivQuoteComponent', () => {
  let component: DivQuoteComponent;
  let fixture: ComponentFixture<DivQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
