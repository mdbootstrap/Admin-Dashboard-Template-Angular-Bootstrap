import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map2',
  templateUrl: './map2.component.html',
  styleUrls: ['./map2.component.scss']
})
export class Map2Component implements OnInit {
  public map: any = { lat: 49.678418, lng: 7.809007 };

  constructor() { }

  ngOnInit() {
  }

}
