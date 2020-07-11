import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnWebsiteEnterComponent } from './on-website-enter.component';

describe('OnWebsiteEnterComponent', () => {
  let component: OnWebsiteEnterComponent;
  let fixture: ComponentFixture<OnWebsiteEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnWebsiteEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnWebsiteEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
