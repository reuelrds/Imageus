import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Image } from '../models/image';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'imageus-favourites-dialog',
  templateUrl: './favourites-dialog.component.html',
  styleUrls: ['./favourites-dialog.component.scss']
})
export class FavouritesDialogComponent implements OnInit {

  email: FormControl;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Image[]
  ) { }

  ngOnInit() {
    this.email = new FormControl('', Validators.email);
    console.log(this.data);
  }

  sendEmail() {
    console.log(this.email.value);
  }

}
