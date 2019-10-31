import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//service
import { SlidersApiService } from './Service/sliders-api.service';
import { HttpClientModule } from '@angular/common/http'; 
import { SliderComponent } from './slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [SlidersApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
