import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Image } from '../models/image';
import { FormControl, Validators } from '@angular/forms';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'imageus-favourites-dialog',
  templateUrl: './favourites-dialog.component.html',
  styleUrls: ['./favourites-dialog.component.scss']
})
export class FavouritesDialogComponent implements OnInit {

  email: FormControl;
  selectedImages: Image[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Image[],
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.email = new FormControl('', [Validators.email, Validators.required]);
    console.log(this.data);
  }

  sendEmail() {
    this.email.markAsTouched();
    if (this.email.valid && this.selectedImages.length > 0 ){
      const ids = this.selectedImages.map((image: Image) => {
        return image.photo_id;
      });
      this.imageService.sendEmail(ids);
    } else if (this.email.invalid) {
      console.log('Invalid Email');
    } else if (this.selectedImages.length === 0 ) {
      console.log('No Images are Selected. Please select some Images before E-mailing');
    }
  }

  setSelectedImages(images: Image[]) {
    this.selectedImages = images;
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}
