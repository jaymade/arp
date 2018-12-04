import { Component, OnInit } from '@angular/core';
import { ImageService } from './../../service/image.service';
import { Image } from './../../models/image.model';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  images: Image[];
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.getImages().subscribe(data => {
      this.images = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Image;
      })
    });
  }

}
