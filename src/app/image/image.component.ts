import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import * as Masonry from 'masonry-layout';
import { MatDialog } from '@angular/material';
import { ImageDetailsComponent } from '../image-details/image-details.component';

@Component({
  selector: 'imageus-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, AfterViewInit {



  @ViewChild('imageContainer') imageContainer: ElementRef;

  data = {
    alt_description: 'Boxed Water cartons on the black and white ground',
    description: 'None',
    full: 'https://images.unsplash.com/photo-1553531087-b25a0b9a68ab?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjY5ODM3fQ',
    likes: 40,
    link: 'https://unsplash.com/@boxedwater',
    name: 'Boxed Water Is Better',
    photo_id: 'M6eWvLb2EYY',
    profile_image: 'https://images.unsplash.com/profile-1553620527727-3d787a876895?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
    raw: 'https://images.unsplash.com/photo-1553531087-b25a0b9a68ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjY5ODM3fQ',
    regular: 'https://images.unsplash.com/photo-1553531087-b25a0b9a68ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY5ODM3fQ',
    small: 'https://images.unsplash.com/photo-1553531087-b25a0b9a68ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjY5ODM3fQ',
    tags: '',
    thumb: 'https://images.unsplash.com/photo-1553531087-b25a0b9a68ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjY5ODM3fQ',
    username: 'boxedwater'
  };


  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const mas = new Masonry(this.imageContainer.nativeElement, {
      itemSelector: '.box',
      columnWidth: '.box-sizer',
      percentPosition: true,
      gutter: '.box-gutter'
    });

  }

  showImage() {
    this.dialog.open(ImageDetailsComponent, {
      width: '80vw',
      height: '90vh',
      data: this.data,
      autoFocus: false
    });
  }

}

