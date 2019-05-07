import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import * as Masonry from 'masonry-layout';
import * as imagesLoaded from 'imagesloaded';

import { MatDialog } from '@angular/material';
import { ImageDetailsComponent } from '../image-details/image-details.component';
import { ImageService } from '../services/image.service';
import { Image } from '../models/image';
import { take } from 'rxjs/operators';

@Component({
  selector: 'imageus-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, AfterViewInit {



  @ViewChild('imageContainer') imageContainer: ElementRef;
  @ViewChildren('ele') ele: QueryList<ElementRef>;

  images: Image[];
  mas;
  imLoad;

  constructor(private dialog: MatDialog, private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.get_photos().subscribe(res => {
      this.images = res;
    });
    this.mas = new Masonry(this.imageContainer.nativeElement, {
      itemSelector: '.box',
      columnWidth: '.box-sizer',
      percentPosition: true,
      gutter: '.box-gutter',
      initLayout: false,
      horizontalOrder: false
    });
  }

  ngAfterViewInit() {
    this.ele.changes.subscribe(result => {
      this.ele.toArray().forEach((el, index, array) => {
        this.mas.addItems(el.nativeElement);
        imagesLoaded(el.nativeElement).on('progress', (instance, image) => {
          if (image.img.src.includes('photo')) {
            this.mas.layout();
            el.nativeElement.style.opacity = 1;
          }
        });
      });

      this.ele.toArray().forEach(el => el.nativeElement.style.opacity = 1);
    });
  }

  showImage(event) {
    const idx = event.getAttribute('data-idx');
    this.dialog.open(ImageDetailsComponent, {
      width: '80vw',
      height: '90vh',
      data: this.images[idx],
      autoFocus: false
    });
  }

}

