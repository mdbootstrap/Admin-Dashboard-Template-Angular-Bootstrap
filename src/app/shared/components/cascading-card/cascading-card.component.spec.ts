import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CascadingCardComponent } from './cascading-card.component';

describe('CascadingCardComponent', () => {
  let component: CascadingCardComponent;
  let fixture: ComponentFixture<CascadingCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascadingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
