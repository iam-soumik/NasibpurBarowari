import { Injectable } from '@angular/core';
import { SliderImage } from '../model/SliderImage';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  sliderList : SliderImage[] = [];
  
  constructor() {
    this.prepareImageList();
  }

  prepareImageList(){
    this.sliderList.push(new SliderImage(1,"https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg", "Its just a demo slider", "Its just a demo alt text", 1));
    this.sliderList.push(new SliderImage(2,"https://images.pexels.com/photos/516541/pexels-photo-516541.jpeg", "Its just a demo slider", "Its just a demo alt text", 2));
    this.sliderList.push(new SliderImage(3,"https://images.pexels.com/photos/59990/sunflowers-sunflower-yellow-petal-59990.jpeg", "Its just a demo slider", "Its just a demo alt text", 4));
    this.sliderList.push(new SliderImage(4,"https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg", "Its just a demo slider", "Its just a demo alt text", 3));
  }

  getImageList(){
    return this.sliderList;
  }
}
