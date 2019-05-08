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
  selectedImages: Image[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Image[]
  ) { }

  ngOnInit() {
    this.email = new FormControl('', Validators.email);
    console.log(this.data);
  }

  sendEmail() {
    console.log(this.email.value);
    if (this.email.valid && this.selectedImages.length > 0 ){
      console.log('fe');
    } else if (this.email.invalid) {
      console.log('Invalid Email');
    } else if (this.selectedImages.length === 0 ) {
      console.log('No Images are Selected. Please select some Images before E-mailing');
    }
  }

  setSelectedImages(images: Image[]) {
    this.selectedImages = images;
  }
}
