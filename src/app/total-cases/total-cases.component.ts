import { Component, OnInit } from '@angular/core';

import { CitiesService } from '../services/cities.service';

@Component({
  selector: 'app-total-cases',
  templateUrl: './total-cases.component.html',
  styleUrls: ['./total-cases.component.css']
})
export class TotalCasesComponent implements OnInit {

  totalCas : number = 0;
  totalMorts : number = 0;
  totalGuerris : number = 0;

  constructor(private citiesService : CitiesService) { 
    this.totalCas = this.citiesService.getTotalCas();
    this.totalMorts = this.citiesService.getTotalMorts();
    this.totalGuerris = this.citiesService.getTotalGueris();
  }

  ngOnInit() {
  }

}
