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

  searchQuery(event) {
    console.log(event);
    this.filteredImages = this.images.filter(image => {
      const str = Object.values(image).join(',');
      return str.includes(event);
    });
    console.log(this.filteredImages);
    console.log(this.filteredImages.length);
  }
}
