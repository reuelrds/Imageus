import { NgModule } from '@angular/core';

import {
  MatToolbarModule, MatIconModule, MatBadgeModule, MatTooltipModule, MatButtonModule, MatMenuModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatSnackBarModule
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
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule
  ]

})

export class MaterialModule {}
