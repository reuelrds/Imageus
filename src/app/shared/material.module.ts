import { NgModule } from '@angular/core';

import {
  MatToolbarModule, MatIconModule, MatBadgeModule, MatTooltipModule, MatButtonModule, MatMenuModule, MatGridListModule
} from '@angular/material';

@NgModule({

  exports: [
    MatMenuModule,
    MatGridListModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule
  ]

})

export class MaterialModule {}
