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
  startOrient = 'landscape';
  selectedOrient = '';

  orients: any = ['landscape', 'portrait'];

  landscape: Image = {
    id: '8a54df69fto',
    src: 'assets/landscape.jpg',
    addedDate: '10/25/2018',
    name: 'Landscape',
    description: 'a family picture',
    project: 'family',
    splash: true
  };
  portrait: Image = {
    id: '8a54df69fto',
    src: 'assets/portrait.jpg',
    addedDate: '10/25/2018',
    name: 'Portrait',
    description: 'a family picture',
    project: 'family',
    splash: true
  };
  photo = {};

  constructor() {}

  ngOnInit() {}

  radioChangeHandler(event: any) {
    this.selectedOrient = event.target.value;
    if (event.target.value === 'portrait') {
      this.photo = this.portrait;
    } else {
      this.photo = this.landscape;
    }
  }
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
