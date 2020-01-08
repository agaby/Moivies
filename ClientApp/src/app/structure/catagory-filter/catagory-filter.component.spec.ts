import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryFilterComponent } from './catagory-filter.component';

describe('CatagoryFilterComponent', () => {
  let component: CatagoryFilterComponent;
  let fixture: ComponentFixture<CatagoryFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoryFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
