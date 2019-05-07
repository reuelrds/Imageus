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
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FavouritesDialogComponent } from './favourites-dialog/favourites-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ImageComponent,
    ImageDetailsComponent,
    SearchComponent,
    FavouritesDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ThemePickerModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ImageDetailsComponent,
    FavouritesDialogComponent
  ]
})
export class AppModule { }
