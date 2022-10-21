import { Component, OnInit } from '@angular/core';
import { SliderImage } from 'src/app/model/SliderImage';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  sliderList : SliderImage[] = [];
  
  constructor(private sliderService : SliderService) { }

  ngOnInit(): void {
    this.sliderList = this.sliderService.getImageList();
  }

}
