import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadingPanelComponent } from './cascading-panel.component';

describe('CascadingPanelComponent', () => {
  let component: CascadingPanelComponent;
  let fixture: ComponentFixture<CascadingPanelComponent>;

  beforeEach(async(() => {
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
