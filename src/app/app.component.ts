import { Component, OnInit } from '@angular/core';
import { ImageService } from './services/image.service';
import { Image } from './models/image';
import { SearchService } from './services/search.service';

@Component({
  selector: 'imageus-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  favImagesCount = 0;
  images: Image[];
  likedImages: Image[] = [];
  filteredImages: Image[];

  constructor(
    private imageService: ImageService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.imageService.get_photos().subscribe(res => {
      this.images = res;
      this.filteredImages = res;
    });

    this.searchService.searchQuery$.subscribe(query => {
      this.searchQuery(query);
    });
  }

  searchQuery(query) {
    console.log(query);
    this.filteredImages = this.images.filter(image => {
      const str = String.prototype.concat(
        image.description,
        image.alt_description,
        image.tags,
        image.username,
        image.name
      );
      return str.includes(query);
    });
    console.log(this.filteredImages);
    console.log(this.filteredImages.length);
  }

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
