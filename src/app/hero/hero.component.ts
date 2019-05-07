import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'imageus-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  searchBox: FormControl;

  constructor() { }

  ngOnInit() {
    this.searchBox = new FormControl('');
  }

  searchPhotos() {
    console.log(this.searchBox.value);

  }

}
