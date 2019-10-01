import { Component, OnInit } from '@angular/core';
import * as globals from '../globals';
import { BlogModel } from '../models/blog-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blogs: BlogModel[] = globals.Blogs;
  
  constructor() { }

  ngOnInit() {
  }

}
