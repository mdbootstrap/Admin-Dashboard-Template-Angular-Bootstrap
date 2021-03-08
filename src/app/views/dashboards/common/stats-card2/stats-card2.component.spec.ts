import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StatsCard2Component } from './stats-card2.component';

describe('StatsCard2Component', () => {
  let component: StatsCard2Component;
  let fixture: ComponentFixture<StatsCard2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsCard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
