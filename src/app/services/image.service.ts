import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Image } from '../models/image';
import { tap } from 'rxjs/operators';

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
      tap(res => this.images = res)
    );
  }
}
