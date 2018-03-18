import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map1',
  templateUrl: './map1.component.html',
  styleUrls: ['./map1.component.scss']
})
export class Map1Component implements OnInit {
  public map: any = { lat: 51.678418, lng: 7.809007 };
  
  constructor() { }

  ngOnInit() {
  }

}
