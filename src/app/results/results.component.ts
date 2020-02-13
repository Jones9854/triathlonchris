import { Component, OnInit } from '@angular/core';
import * as globals from '../globals';

@Component({
selector: 'app-results',
templateUrl: './results.component.html',
styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  elements = globals.Blogs;
  headElements = ['Race', 'Swim', 'Bike', 'Run', 'Overall'];
}