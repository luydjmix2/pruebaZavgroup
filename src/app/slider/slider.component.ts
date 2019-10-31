import { Component, OnInit, NgModule } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SlidersApiService } from '../Service/sliders-api.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

@NgModule({
  imports: [CarouselModule.forRoot()]
})
export class SliderComponent implements OnInit {

  constructor(private dataListSlider: SlidersApiService) { 
    setTheme('bs4');
  }

  ngOnInit() {
   
    this.getListSliders();
    // console.log(this.SliderList);
  }

  SliderList:any = [];
  getListSliders(){
    this.dataListSlider.getListSlider().subscribe((data) =>
      this.SliderList = data
      // console.log(data)
    );
  }
}
