import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnChanges, ViewChildren, QueryList } from '@angular/core';

import * as Masonry from 'masonry-layout';
import { MatDialog } from '@angular/material';
import { ImageDetailsComponent } from '../image-details/image-details.component';
import { ImageService } from '../services/image.service';
import { Image } from '../models/image';

@Component({
  selector: 'imageus-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, AfterViewInit, OnChanges {



  @ViewChild('imageContainer') imageContainer: ElementRef;
  @ViewChildren('ele') ele: QueryList<'ele'>;

  images: Image[];
  mas;

  constructor(private dialog: MatDialog, private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.get_photos().subscribe(res => {
      this.images = res;
    });
  }

  ngAfterViewInit() {
    this.mas = new Masonry(this.imageContainer.nativeElement, {
      itemSelector: '.box',
      columnWidth: '.box-sizer',
      percentPosition: true,
      gutter: '.box-gutter'
    });

    this.ele.changes.subscribe(el => {
      el.toArray().forEach(res => {
        this.mas.appended(res.nativeElement);
      });
    });
  }

  ngOnChanges() {

  }

  showImage(event) {
    this.dialog.open(ImageDetailsComponent, {
      width: '80vw',
      height: '90vh',
      data: event,
      autoFocus: false
    });
  }

}

