import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { query } from '@angular/animations';

@Component({
  selector: 'imageus-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  searchBox: FormControl;

  @Output() heroSearchQuery = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.searchBox = new FormControl('');
  }

  searchPhotos() {
    this.heroSearchQuery.emit(this.searchBox.value);

  }

}
