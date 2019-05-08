import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Image } from '../models/image';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {


  images: Image[];

  constructor(
    private httpClient: HttpClient
  ) {}

  get_photos() {
    return this.httpClient.get<Image[]>('http://localhost:3000/api/photos').pipe(
      map(images => {
        images.forEach(image => image.liked = false);
        return images;
      })
    );
  }

  sendEmail(selectedImages: string[]) {
    console.log(selectedImages);
    this.httpClient.post('http://localhost:3000/api/email', selectedImages);
  }
}
