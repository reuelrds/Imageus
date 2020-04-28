import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageService } from '../../services/image.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Image } from '../../shared/models/image';

@Component({
  selector: 'imageus-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  email: FormControl;
  selectedImages: Image[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Image[],
    private imageService: ImageService,
    private snackBar: MatSnackBar
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
      this.imageService.sendEmail(this.email.value, ids).subscribe((message: {[key: string]: string}) => {
        this.snackBar.open(message.message, 'Close', {
          duration: 5000
        });
      });
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
