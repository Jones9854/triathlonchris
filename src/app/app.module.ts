import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { CustomDatePipePipe } from './custom-date-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    ResultsComponent,
    CustomDatePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
