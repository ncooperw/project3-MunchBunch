import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerAccountComponent } from './consumer-account.component';

describe('ConsumerAccountComponent', () => {
  let component: ConsumerAccountComponent;
  let fixture: ComponentFixture<ConsumerAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
