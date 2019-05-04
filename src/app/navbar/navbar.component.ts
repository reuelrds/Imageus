import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'imageus-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {


  @Input() favImages: number;

  isFavImagesCountZero = true;

  constructor() { }

  ngOnInit() {
    console.log(this.favImages);
  }

  ngOnChanges() {
    this.isFavImagesCountZero = this.favImages > 0 ? false : true;
  }
}
