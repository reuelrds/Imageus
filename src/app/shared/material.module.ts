import { NgModule } from '@angular/core';

import {
  MatToolbarModule, MatIconModule, MatBadgeModule, MatTooltipModule, MatButtonModule, MatMenuModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatDialogModule
} from '@angular/material';

@NgModule({

  exports: [
    MatMenuModule,
    MatGridListModule,
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatDialogModule
  ]

})

export class MaterialModule {}
