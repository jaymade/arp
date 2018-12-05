import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  imgOrientation = 'landscape';
  title = 'photograph';
  photo: Image = {
    id: '8a54df69fto',
    src: 'assets/portrait.jpg',
    addedDate: '11/21/2018',
    name: 'landscape',
    description: 'a family picture',
    project: 'family',
    splash: true
  };

  constructor() {}

  ngOnInit() {}

  // checkPicOrentation() {
  //   if (this.photo.width > this.photo.height) {
  //     imgOrientation = 'landscape';
  //   } else {
  //     this.photo.width < this.photo.height;
  //   }
  //   {
  //     imgOrientation = 'portrait';
  //   }
  // }
}
