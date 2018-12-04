import { Image } from './../models/image.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private firestore: AngularFirestore) { }

  getImages() {
    return this.firestore.collection('images').snapshotChanges();
  }

  createImage(image: Image) {
    return this.firestore.collection('images').add(image);
  }
  updatePolicy(image: Image) {
    delete image.id;
    this.firestore.doc('images/' + image.id).update(image);
  }

  deletePolicy(imageId: string) {
    this.firestore.doc('images/' + imageId).delete();
  }
}
