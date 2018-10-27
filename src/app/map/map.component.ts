import { Component, OnInit } from '@angular/core';

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  zoom: number = 12;

  lat: number = 39.6768129;
  lng: number = -104.9578801;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  OnChoseLocation(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    console.log("lat" , event.coords.lat);
    console.log("lng" , event.coords.lng);
  
  }

  mapClicked(event ) {
    this.markers.push({
      lat: event.coords.lat,
      lng: event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: marker, event) {
    console.log('dragEnd', m, event);
  }

  markers: marker[] =[
      {
        lat: 39.6768129,
        lng: -104.9578801,
        label: 'A',
        draggable: true
      }
  ]
 
  constructor() { }

  ngOnInit() {
  }

}
