import { Component, OnInit } from '@angular/core';
import { ResultModel } from '../models/result-model';

@Component({
selector: 'app-results',
templateUrl: './results.component.html',
styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  elements: ResultModel[] = [
    {RaceName: 'Ironman Cork 2019', Swim: 0, Bike: 0.256493055555556, Run: 0.176377314814815, Overall: 0.438541666666667 },
    {RaceName: 'Ironman Wales 2018',   Swim: 0.0476851851851852, Bike: 0.252465277777778, Run: 0.153622685185185, Overall: 0.462835648148148 },
    {RaceName: 'Ironman Austria 2018', Swim: 0.0480902777777778, Bike: 0.22193287037037, Run:  0.149108796296296, Overall: 0.426087962962963 },
    {RaceName: 'Ironman Wales 2017',   Swim: 0.0457407407407407, Bike: 0.283148148148148, Run: 0.145810185185185, Overall: 0.464583333333333 }
  ];
  headElements = ['Race Name', 'Swim', 'Bike', 'Run', 'Overall'];

  ngOnInit() {
    this.elements.forEach(element => {
      element.SwimTime = new Date(element.Swim);
      element.BikeTime = new Date(element.Bike);
      element.RunTime = new Date(element.Run);
      element.OverallTime = new Date(element.Overall);
    })
  }
}