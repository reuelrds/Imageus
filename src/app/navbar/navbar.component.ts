import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FavouritesDialogComponent } from '../favourites-dialog/favourites-dialog.component';
import { Image } from '../models/image';

@Component({
  selector: 'imageus-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {


  @Input() favImagesCount: number;
  @Input() favImages: Image[];

  isFavImagesCountZero = true;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    console.log(this.favImages);
  }

  ngOnChanges() {
    this.isFavImagesCountZero = this.favImagesCount > 0 ? false : true;
  }

  openFavouritesDialog() {
    this.dialog.open(FavouritesDialogComponent, {
      width: '80vw',
      height: '80vh',
      data: this.favImages
    });
  }
}
