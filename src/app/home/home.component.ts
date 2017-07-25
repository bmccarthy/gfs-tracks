import { Component, OnInit } from '@angular/core';

declare var L: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private map: any;

  constructor() { }

  ngOnInit() {
    this.map = L.map('map').fitWorld();

    const accessToken = 'pk.eyJ1IjoiYm1jY2FydGh5ODQiLCJhIjoiY2o1aXcwemZ4MW01eTMwbzE3NTBqbWRsbiJ9.zwdA4geMF0ezbGMLDGUWXg';

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      // tslint:disable-next-line:max-line-length
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: accessToken
    }).addTo(this.map);

    this.map.on('locationerror', (e) => this.onLocationError(e));
    this.map.on('locationfound', (e) => this.onLocationFound(e));

    this.map.locate({ setView: true, maxZoom: 16 });
  }

  onLocationError(e) {
    alert(e.message);
  }

  onLocationFound(e) {
    const radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(this.map)
      .bindPopup('You are within ' + radius + ' meters from this point').openPopup();

    L.circle(e.latlng, radius).addTo(this.map);
  }
}
