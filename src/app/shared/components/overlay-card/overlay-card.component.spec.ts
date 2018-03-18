import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayCardComponent } from './overlay-card.component';

describe('OverlayCardComponent', () => {
  let component: OverlayCardComponent;
  let fixture: ComponentFixture<OverlayCardComponent>;

  beforeEach(async(() => {
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
