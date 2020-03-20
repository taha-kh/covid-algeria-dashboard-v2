import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { City } from '../models/city.model';
import { Marker } from '../models/marker.model';
import { CitiesService } from '../services/cities.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  cities: City[];

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  algerieLat = 32.689215;
  algerieLng = 2.708423;
  maxBoundsLimits = new mapboxgl.LngLatBounds(
    new mapboxgl.LngLat(-22.808084, 16.037997),
    new mapboxgl.LngLat(20.532703, 40.688306),
  );



  constructor(private citiesService: CitiesService) {
    this.cities = citiesService.getCities();
  }

  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken : environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 4,
      center: [this.algerieLng, this.algerieLat],
      minZoom: 2,
      //maxBounds: this.maxBoundsLimits
    });

    this.markCities();

    this.map.addControl(new mapboxgl.NavigationControl());
  }

  markCities() {
    for (let city of this.cities) {
      var size = 0;
      var fillStyle = "";
      if (city.totalCas < 4) {
        size = 80;
        fillStyle = '#fdd835';
      } else if (city.totalCas >= 4 && city.totalCas <20 ) {
        size = 130;
        fillStyle = '#ffa726';
      } else if (city.totalCas >= 20) {
        size = 200;
        fillStyle = '#bf360c';
      } 
      
      this.addMarkers(this.map, size, city.nom, city.longitude, city.latitude, fillStyle);
    }
    
  }

  addMarkers(map: mapboxgl.Map, sizeEpidemie: number, cityName, long : number, lat : number, fillStyle : string) {
    var size = sizeEpidemie;

    var pulsingDot = {
      width: size,
      height: size,
      data: new Uint8Array(size * size * 4),

      // get rendering context for the map canvas when layer is added to the map
      onAdd: function () {
        var canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
      },

      // called once before every frame where the icon will be used
      render: function () {
        var duration = 1000;
        var t = (performance.now() % duration) / duration;

        var radius = (size / 2) * 0.3;
        var outerRadius = (size / 2) * 0.7 * t + radius;
        var context = this.context;

        // draw outer circle
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          outerRadius,
          0,
          Math.PI * 2
        );
        context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
        context.fill();

        // draw inner circle
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          radius,
          0,
          Math.PI * 2
        );
        context.fillStyle = fillStyle;
        context.strokeStyle = 'white';
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();

        // update this image's data with data from the canvas
        this.data = context.getImageData(
          0,
          0,
          this.width,
          this.height
        ).data;

        // continuously repaint the map, resulting in the smooth animation of the dot
        map.triggerRepaint();

        // return `true` to let the map know that the image was updated
        return true;
      }
    };

    map.on('load', () => {
      map.addImage(cityName, pulsingDot, { pixelRatio: 2 });

      map.addSource(cityName, {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties : {},
              geometry: {
                type: 'Point',
                coordinates: [long, lat]
              }
            }
          ]
        }
      });

      map.addLayer({
        id: cityName + 'id',
        type: 'symbol',
        source: cityName,
        layout: {
          "icon-allow-overlap": true,
          "icon-image": cityName,
        }
      });
    });
  }

}
