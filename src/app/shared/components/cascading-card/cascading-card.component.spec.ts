import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadingCardComponent } from './cascading-card.component';

describe('CascadingCardComponent', () => {
  let component: CascadingCardComponent;
  let fixture: ComponentFixture<CascadingCardComponent>;

  beforeEach(async(() => {
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
