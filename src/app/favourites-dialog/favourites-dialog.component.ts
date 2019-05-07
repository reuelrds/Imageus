import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Image } from '../models/image';

@Component({
  selector: 'imageus-favourites-dialog',
  templateUrl: './favourites-dialog.component.html',
  styleUrls: ['./favourites-dialog.component.scss']
})
export class FavouritesDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Image[]
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

}
