import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Settings3Component } from './settings3.component';

describe('Settings3Component', () => {
  let component: Settings3Component;
  let fixture: ComponentFixture<Settings3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Settings3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Settings3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
