import { Component } from '@angular/core';

import { Image } from './shared/models/image';

@Component({
  selector: 'imageus-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  favImagesCount = 0;
  images: Image[];
  likedImages: Image[] = [];
  filteredImages: Image[];

  searchQuery($event) {}
}
