import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTrucksComponent } from './display-trucks.component';

describe('DisplayTrucksComponent', () => {
  let component: DisplayTrucksComponent;
  let fixture: ComponentFixture<DisplayTrucksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTrucksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
