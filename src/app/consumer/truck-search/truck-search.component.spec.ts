import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckSearchComponent } from './truck-search.component';

describe('TruckSearchComponent', () => {
  let component: TruckSearchComponent;
  let fixture: ComponentFixture<TruckSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
