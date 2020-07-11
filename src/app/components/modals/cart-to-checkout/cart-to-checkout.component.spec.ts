import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartToCheckoutComponent } from './cart-to-checkout.component';

describe('CartToCheckoutComponent', () => {
  let component: CartToCheckoutComponent;
  let fixture: ComponentFixture<CartToCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartToCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartToCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
