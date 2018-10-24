import { Component, OnInit } from '@angular/core';


//declare variable for map
declare let L;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const mymap = L.map('map').setView([39.7452, 104.9922], 13);

    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        minZoom: 13,
        id: "mapbox.emerald",
        accessToken:
          "pk.eyJ1IjoibmNvb3BlcnciLCJhIjoiY2pscHYybHlqMjkybDNrb3NuODQ3enhkdyJ9.PYpALCFWSGmaKkhN35TpwA"
      }
    ).addTo(mymap);

    
  }


}
