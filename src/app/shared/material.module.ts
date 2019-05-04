import { NgModule } from '@angular/core';

import {
  MatToolbarModule, MatIconModule, MatBadgeModule, MatTooltipModule, MatButtonModule, MatMenuModule, MatGridListModule, MatInputModule, MatFormFieldModule
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
    MatToolbarModule
  ]

})

export class MaterialModule {}
