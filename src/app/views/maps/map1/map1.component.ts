import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map1',
  templateUrl: './map1.component.html',
  styleUrls: ['./map1.component.scss']
})
export class Map1Component implements OnInit {
  center: google.maps.LatLngLiteral = {
    lat: 51.678418,
    lng: 7.809007,
  };

  roadmapMapOptions: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
  };

  hybridMapOptions: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
  };

  satelliteMapOptions: google.maps.MapOptions = {
    mapTypeId: 'satellite',
  };

  terrainMapOptions: google.maps.MapOptions = {
    mapTypeId: 'terrain',
  };

  marker = {
    position: { lat: 51.678418, lng: 7.809007 },
  };

  constructor() { }

  ngOnInit() {
  }

}
