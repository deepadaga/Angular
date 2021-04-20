import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoppComponent } from './addopp.component';

describe('AddoppComponent', () => {
  let component: AddoppComponent;
  let fixture: ComponentFixture<AddoppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddoppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
