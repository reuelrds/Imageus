import { Component, OnInit } from '@angular/core';

import { Image } from './shared/models/image';
import { ImageService } from './services/image.service';

@Component({
  selector: 'imageus-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  favImagesCount = 0;
  images: Image[];
  likedImages: Image[] = [];
  filteredImages: Image[];

  constructor(
    private imageService: ImageService
  ) {}

  ngOnInit() {
    this.imageService.get_photos().subscribe(res => {
      this.images = res;
      this.filteredImages = res;
    });
  }

  searchQuery($event) {}

  liked(likedImage) {
    const result = this.likedImages.some(image => image.photo_id === likedImage.photo_id);

    if (!result) {
      this.likedImages.push(likedImage);
      this.favImagesCount += 1;
    } else {
      this.likedImages = this.likedImages.filter(image => image.photo_id !== likedImage.photo_id);
      this.favImagesCount -= 1;
    }
    console.log(this.likedImages, this.favImagesCount);
  }
}
