import { Injectable } from '@angular/core';

import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  cities: City[] = [
    { nom: 'Ouargla', latitude: 31.952921, longitude: 5.334971, order: 2, totalCas: 1, totalMorts: 0, totalGueris: 0 },
    { nom: 'Blida', latitude: 36.471592, longitude: 2.825939, order: 1, totalCas: 40, totalMorts: 3, totalGueris: 12 },
    { nom: 'Mascara', latitude: 35.401910, longitude: 0.140138, order: 3, totalCas: 2, totalMorts: 0, totalGueris: 0 },
    { nom: 'Tizi Ouzou', latitude: 36.713468, longitude: 4.047377, order: 4, totalCas: 4, totalMorts: 0, totalGueris: 0 },
    { nom: 'Souk Ahras', latitude: 36.279946, longitude: 7.938946, order: 5, totalCas: 1, totalMorts: 0, totalGueris: 0 },
    { nom: 'Skikda', latitude: 36.881845, longitude: 6.905612, order: 6, totalCas: 2, totalMorts: 1, totalGueris: 0 },
    { nom: 'Alger', latitude: 36.772183, longitude: 3.060068, order: 7, totalCas: 4, totalMorts: 0, totalGueris: 0 },
    { nom: 'Guelma', latitude: 36.462044, longitude: 7.431173, order: 8, totalCas: 2, totalMorts: 0, totalGueris: 0 },
    { nom: 'Adrar', latitude: 28.017765, longitude: -0.266468, order: 9, totalCas: 1, totalMorts: 0, totalGueris: 0 },
    { nom: 'Bouira', latitude: 36.373485, longitude: 3.898228, order: 10, totalCas: 1, totalMorts: 0, totalGueris: 0 },
    { nom: 'Bordj Bou Arreridj', latitude: 36.073074, longitude: 4.760833, order: 11, totalCas: 1, totalMorts: 0, totalGueris: 0 },
    { nom: 'Annaba', latitude: 36.902874, longitude: 7.755392, order: 12, totalCas: 1, totalMorts: 0, totalGueris: 0 },
  ];

  totalCas: number = 0;
  totalMorts: number = 0;
  totalGueris: number = 0;

  constructor() { }

  getCities(): City[] {
    return this.cities;
  }

  getTotalCas() {
    for (var i = 0; i < this.cities.length; i++) {
      let city = this.cities[i];
      this.totalCas = city.totalCas + this.totalCas;
    }

    return this.totalCas;
  }

  getTotalMorts() {
    for (var i = 0; i < this.cities.length; i++) {
      let city = this.cities[i];
      this.totalMorts = city.totalMorts + this.totalMorts;
    }

    return this.totalMorts;
  }

  getTotalGueris() {
    for (var i = 0; i < this.cities.length; i++) {
      let city = this.cities[i];
      this.totalGueris = city.totalGueris + this.totalGueris;
    }

    return this.totalGueris;
  }
}
