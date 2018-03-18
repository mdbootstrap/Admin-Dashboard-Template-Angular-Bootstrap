import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoversComponent } from './popovers.component';

describe('PopoversComponent', () => {
  let component: PopoversComponent;
  let fixture: ComponentFixture<PopoversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
