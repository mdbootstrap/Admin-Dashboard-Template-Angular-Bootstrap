import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OverlayCardComponent } from './overlay-card.component';

describe('OverlayCardComponent', () => {
  let component: OverlayCardComponent;
  let fixture: ComponentFixture<OverlayCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
