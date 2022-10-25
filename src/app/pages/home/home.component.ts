import { Component, OnInit } from '@angular/core';
import { SliderComponent } from 'src/app/component/slider/slider.component';
import { SliderImage } from 'src/app/model/SliderImage';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private sliderService : SliderService) { }
  sliderImageList : SliderImage[] = [];
  ngOnInit(): void {
    this.sliderImageList = this.sliderService.getImageList();
  }

}
