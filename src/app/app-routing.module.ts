import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {title: "Home"}
  },
  {
    path: 'blog/:id',
    component: BlogComponent,
    data: {title: "Blog"}
  },
  {
    path: 'results',
    component: ResultsComponent,
    data: {title: "Results"}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
