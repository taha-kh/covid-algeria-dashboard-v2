import { Injectable } from '@angular/core';

import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  cities: City[] = [
    { nom: 'Ouargla', latitude: 31.952483, longitude: 5.333138, order: 0, totalCas: 40, totalMorts: 4, totalGueris: 1 },
    { nom: 'Blida', latitude: 36.473854, longitude: 2.832376, order: 1, totalCas: 702, totalMorts: 102, totalGueris: 32 }, 
    { nom: 'Mascara', latitude: 35.402068, longitude: 0.140019, order: 2, totalCas: 29, totalMorts: 4, totalGueris: 2 },
    { nom: 'Tizi Ouzou', latitude: 36.713446, longitude: 4.047201, order: 3, totalCas:97 , totalMorts: 13, totalGueris: 2 },
    { nom: 'Souk Ahras', latitude: 36.279942, longitude: 7.938452, order: 4, totalCas:7 , totalMorts: 1, totalGueris: 0 },
    { nom: 'Skikda', latitude: 36.866281, longitude: 6.906113, order: 5, totalCas:30 , totalMorts: 4, totalGueris: 3 },
    { nom: 'Alger', latitude: 36.731094, longitude: 3.087760, order: 6, totalCas:466 , totalMorts: 98, totalGueris: 11 },
    { nom: 'Adrar', latitude: 28.017002, longitude: -0.264305, order: 7, totalCas:25 , totalMorts: 1, totalGueris: 0 },
    { nom: 'Bouira', latitude: 36.369125, longitude: 3.900446, order: 8, totalCas:19 , totalMorts: 2, totalGueris: 0 },
    { nom: 'Bordj Bou Arreridj', latitude: 36.073917, longitude: 4.763116, order: 9, totalCas:70 , totalMorts: 16, totalGueris: 0 },
    { nom: 'Annaba', latitude: 36.914102, longitude:7.742537, order: 10, totalCas:24 , totalMorts: 3, totalGueris: 3},
    { nom: 'Béjaïa', latitude: 36.751490, longitude:5.055527, order: 11, totalCas:107 , totalMorts: 14, totalGueris: 1},
    { nom: 'Médéa', latitude: 36.263697, longitude:2.758640, order: 12, totalCas:42 , totalMorts: 9, totalGueris: 1},
    { nom: 'Boumerdès', latitude: 36.751139, longitude:3.478879, order: 13, totalCas:40 , totalMorts: 7, totalGueris: 1},
    { nom: 'El Oued', latitude: 33.367701, longitude:6.851824, order: 14, totalCas:31 , totalMorts: 8, totalGueris: 0},
    { nom: 'Tissemsilt', latitude: 35.605358, longitude:1.813026, order: 15, totalCas:29 , totalMorts: 2, totalGueris: 1},
    { nom: 'Oran', latitude: 35.698704, longitude: -0.634972, order: 16, totalCas:181 , totalMorts: 13, totalGueris: 0},
    { nom: 'Sétif', latitude: 36.189727, longitude: 5.410707, order: 17, totalCas:133 , totalMorts: 10, totalGueris: 2},
    { nom: 'Khenchela', latitude: 35.427002, longitude: 7.145963, order: 18, totalCas:23 , totalMorts: 2, totalGueris: 0},
    { nom: 'Relizane', latitude: 35.744934, longitude:0.557428, order: 19, totalCas:17 , totalMorts: 3, totalGueris: 0},
    { nom: 'Constantine', latitude: 36.356822, longitude:6.638755, order: 20, totalCas:98 , totalMorts: 9, totalGueris: 0},
    { nom: 'Chlef', latitude: 36.157821, longitude:1.337071, order: 21, totalCas:49 , totalMorts: 1, totalGueris: 0},
    { nom: 'Tlemcen', latitude: 34.881377, longitude: -1.314846, order: 22, totalCas:53 , totalMorts: 6, totalGueris: 0},
    { nom: 'Jijel', latitude: 36.821026, longitude: 5.763346, order: 23, totalCas:33 , totalMorts: 5, totalGueris: 0},
    { nom: 'Mostaganem', latitude: 35.931172, longitude: 0.091032, order: 24, totalCas:56 , totalMorts: 3, totalGueris: 0},
    { nom: 'Aïn Témouchent', latitude: 35.299222, longitude: -1.139439, order: 25, totalCas:23 , totalMorts: 4, totalGueris: 0},
    { nom: 'Sidi Bel Abbès', latitude: 35.210630, longitude: -0.629740, order: 26, totalCas:29 , totalMorts: 5, totalGueris: 0},
    { nom: 'Tipaza', latitude: 36.590616, longitude: 2.443470, order: 27, totalCas:109 , totalMorts: 19, totalGueris: 0},
    { nom: 'Biskra', latitude: 34.845139, longitude:5.725017, order: 28, totalCas:31 , totalMorts: 6, totalGueris: 2},
    { nom: 'Laghouat', latitude: 33.807971, longitude:2.863092, order: 29, totalCas:19 , totalMorts: 0, totalGueris: 0},
    { nom: 'Oum El Bouaghi', latitude: 35.868670, longitude:7.110876, order: 30, totalCas:37 , totalMorts: 4, totalGueris: 0},
    { nom: 'Batna', latitude: 35.562884, longitude:6.188990, order: 31, totalCas:26 , totalMorts: 4, totalGueris: 0},
    { nom: 'El Tarf', latitude: 36.757498, longitude:8.307886, order: 32, totalCas:9 , totalMorts: 0, totalGueris: 0},
    { nom: 'Ghardaïa', latitude: 32.494093, longitude:3.644696, order: 33, totalCas:37 , totalMorts: 4, totalGueris: 0},
    { nom: 'Djelfa', latitude: 34.670126, longitude:3.251054, order: 34, totalCas:45 , totalMorts: 4, totalGueris: 0},
    { nom: 'Aïn Defla', latitude: 36.250939, longitude:1.939391, order: 35, totalCas:107 , totalMorts: 5, totalGueris: 0},
    { nom: 'Guelma', latitude: 36.462630, longitude:7.432938, order: 36, totalCas:16 , totalMorts: 1, totalGueris: 0},
    { nom: 'Illizi', latitude: 26.477581, longitude: 8.477558, order: 37, totalCas:2 , totalMorts: 0, totalGueris: 0},
    { nom: 'M Sila', latitude: 35.718074,  longitude: 4.523985, order: 38, totalCas:17 , totalMorts: 6, totalGueris: 0},
    { nom: 'Tiaret', latitude: 35.370772,  longitude: 1.321859, order: 39, totalCas:29 , totalMorts: 2, totalGueris: 0},
    { nom: 'Béchar', latitude: 31.623579,  longitude: -2.216137, order: 40, totalCas:14 , totalMorts: 0, totalGueris: 0},
    { nom: 'Tébessa', latitude: 35.401046,  longitude: 8.117128, order: 41, totalCas:19 , totalMorts: 2, totalGueris: 0},
    { nom: 'Mila', latitude: 36.451724,  longitude:6.258527, order: 42, totalCas:9 , totalMorts: 1, totalGueris: 0},
    { nom: 'El Bayadh', latitude: 33.685101,  longitude:1.030077, order: 43, totalCas:2 , totalMorts: 0, totalGueris: 0},
    { nom: 'Naâma', latitude: 33.266713,  longitude:-0.312942, order: 44, totalCas:1 , totalMorts: 0, totalGueris: 0},
    { nom: 'Saïda', latitude: 34.841558,  longitude:0.145711, order: 45, totalCas:4 , totalMorts: 0, totalGueris: 0},
    { nom: 'Tamanrasset', latitude: 22.789584,  longitude:5.520889, order: 46, totalCas:1 , totalMorts: 0, totalGueris: 0},
   
   
     
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
