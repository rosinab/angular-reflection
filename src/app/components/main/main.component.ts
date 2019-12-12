import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../../services/generator.service';

import { Generator } from '../../models/Generator'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  list:Generator[];

  constructor(private generatorService:GeneratorService) { }
  ngOnInit() {
    this.generatorService.generateUser().subscribe(list => {
      this.list = list;
  },
    error => console.warn(error));
  }
}

