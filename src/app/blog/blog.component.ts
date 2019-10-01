import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../models/blog-model';
import { ActivatedRoute } from '@angular/router';
import * as globals from '../globals';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogId: number;
  blog: BlogModel;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.blogId = this.route.params['value']['id'];
    console.log(this.blogId);
    this.blog = globals.Blogs.filter(b => b.ID == this.blogId)[0];
  }

}
