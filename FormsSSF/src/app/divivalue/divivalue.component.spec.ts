import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivivalueComponent } from './divivalue.component';

describe('DivivalueComponent', () => {
  let component: DivivalueComponent;
  let fixture: ComponentFixture<DivivalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivivalueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivivalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
