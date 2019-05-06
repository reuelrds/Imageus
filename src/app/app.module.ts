import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './shared/material.module';
import { ThemePickerModule } from './theme-picker/theme-picker.component';
import { HeroComponent } from './hero/hero.component';
import { ImageComponent } from './image/image.component';
import { ImageDetailsComponent } from './image-details/image-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ImageComponent,
    ImageDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ThemePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ImageDetailsComponent
  ]
})
export class AppModule { }
