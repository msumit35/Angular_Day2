import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css'],
  //providers: [GalleryService]
})
export class Task2Component implements OnInit {
  gallery: any;
  // [] = [
  //   { id: 1, name: 'Chrysanthemum', url: './src/Images/Chrysanthemum.jpg' },
  //   { id: 2, name: 'Desert', url: './src/Images/Desert.jpg' },
  //   { id: 3, name: 'Hydrangeas', url: './src/Images/Hydrangeas.jpg' }
  // ];
  constructor(private _galleryService: GalleryService) {
    _galleryService.getPhotos().subscribe(
      (data: any) => 
      { 
        this.gallery = JSON.parse(data._body)
      });
   }

  ngOnInit() {
  }

}
