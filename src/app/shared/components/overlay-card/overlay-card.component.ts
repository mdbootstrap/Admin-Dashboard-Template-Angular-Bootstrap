import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'overlay-card',
  templateUrl: './overlay-card.component.html',
  styleUrls: ['./overlay-card.component.scss']
})
export class OverlayCardComponent implements OnInit {

  @Input() alignment = 'center';
  @Input() src = '';
  @Input() color = '';
  constructor() { }

  ngOnInit() {
  }

}
