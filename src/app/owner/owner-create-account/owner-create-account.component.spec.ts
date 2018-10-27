import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerCreateAccountComponent } from './owner-create-account.component';

describe('OwnerCreateAccountComponent', () => {
  let component: OwnerCreateAccountComponent;
  let fixture: ComponentFixture<OwnerCreateAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerCreateAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
