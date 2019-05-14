import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Image } from '../models/image';
import { tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  BACKEND_URL = environment.apiUrl;
  images: Image[];

  constructor(
    private httpClient: HttpClient
  ) {}

  get_photos() {
    return this.httpClient.get<Image[]>(`${this.BACKEND_URL}/api/photos`).pipe(
      map(images => {
        images.forEach(image => image.liked = false);
        return images;
      })
    );
  }

  sendEmail(email, selectedImages: string[]) {
    console.log(selectedImages);
    return this.httpClient.post(`${this.BACKEND_URL}/api/email`, {
      email,
      ids: selectedImages
    });
  }
}
