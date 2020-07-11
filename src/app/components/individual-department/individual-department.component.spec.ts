import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualDepartmentComponent } from './individual-department.component';

describe('IndividualDepartmentComponent', () => {
  let component: IndividualDepartmentComponent;
  let fixture: ComponentFixture<IndividualDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
