import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CascadingPanelComponent } from './cascading-panel.component';

describe('CascadingPanelComponent', () => {
  let component: CascadingPanelComponent;
  let fixture: ComponentFixture<CascadingPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascadingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
