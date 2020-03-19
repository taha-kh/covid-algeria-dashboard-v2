import { Injectable } from '@angular/core';

import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  cities: City[] = [
    { nom: 'Blida البليدة', latitude: 36.471592, longitude: 2.825939, order: 1, totalCas: 63, totalMorts: 7, totalGueris: 32 },
    { nom: 'Alger الجزائر', latitude: 36.772183, longitude: 3.060068, order: 7, totalCas: 7, totalMorts: 0, totalGueris: 0 },
    { nom: 'Tizi Ouzou تيزي وزو', latitude: 36.713468, longitude: 4.047377, order: 4, totalCas: 4, totalMorts: 0, totalGueris: 0 },
    { nom: 'Skikda سكيكدة', latitude: 36.881845, longitude: 6.905612, order: 6, totalCas: 3, totalMorts: 1, totalGueris: 0 },
    { nom: 'Guelma قالمة', latitude: 36.462044, longitude: 7.431173, order: 8, totalCas: 2, totalMorts: 0, totalGueris: 0 },
    { nom: 'Bouira البويرة', latitude: 36.373485, longitude: 3.898228, order: 10, totalCas: 1, totalMorts: 0, totalGueris: 0 },
    { nom: 'Bordj Bou Arreridj برج بوعريريج', latitude: 36.073074, longitude: 4.760833, order: 11, totalCas: 1, totalMorts: 0, totalGueris: 0 },
    { nom: 'Béjaïa بجاية', latitude: 36.740255, longitude: 5.065597, order: 13, totalCas: 1, totalMorts: 0, totalGueris: 0 },
    { nom: 'Médéa المدية', latitude: 36.262699, longitude: 2.755173, order: 13, totalCas: 2, totalMorts: 1, totalGueris: 0 },
    { nom: 'Souk Ahras سوق أهراس', latitude: 36.279946, longitude: 7.938946, order: 5, totalCas: 1, totalMorts: 0, totalGueris: 0 },
    { nom: 'Oran وهران', latitude: 35.700587, longitude: -0.633254, order: 5, totalCas: 1, totalMorts: 0, totalGueris: 0 },
    { nom: 'Adrar أدرار', latitude: 28.017765, longitude: -0.266468, order: 9, totalCas: 1, totalMorts: 0, totalGueris: 0 },
    { nom: 'Boumerdès بومرداس', latitude: 36.752000, longitude: 3.464908, order: 13, totalCas: 1, totalMorts: 0, totalGueris: 0 },
    { nom: 'TISSEMSILT تيسمسيلت', latitude: 35.605131, longitude: 1.810995, order: 13, totalCas: 1, totalMorts: 0, totalGueris: 0 },
    { nom: 'Annaba عنابة', latitude: 36.902874, longitude: 7.755392, order: 12, totalCas: 1, totalMorts: 0, totalGueris: 0 },
    // { nom: 'Mascara معسكر', latitude: 35.401910, longitude: 0.140138, order: 3, totalCas: 2, totalMorts: 0, totalGueris: 0 },
    // { nom: 'El Oued الوادي', latitude: 33.365779, longitude: 6.847180, order: 13, totalCas: 2, totalMorts: 1, totalGueris: 0 },
     
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
