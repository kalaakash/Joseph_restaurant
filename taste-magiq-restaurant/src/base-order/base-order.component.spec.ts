import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseOrderComponent } from './base-order.component';

describe('BaseOrderComponent', () => {
  let component: BaseOrderComponent;
  let fixture: ComponentFixture<BaseOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
