import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { FormControl } from '@angular/forms';
// import { SearchService } from '../services/search.service';

@Component({
  selector: 'imageus-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('slideIn', [
      state('false', style({
        transform: 'translate3d(100%, 0, 0)',
        opacity: 0,
        visibility: 'hidden'
      })),
      state('true', style({
        transform: 'translate3d(0,0,0)',
        opacity: 1,
        visibility: 'visible'
      })),
      transition('false <=> true', animate('500ms ease-in-out')),
    ])
  ]
})
export class SearchComponent implements OnInit {

  searchBox: FormControl;
  isSearchBoxVisible = false;
  isSearchBoxIconVisible = true;

  constructor(
    // private searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchBox = new FormControl('');
  }

  searchPhoto() {
    // this.searchService.sendQuery(this.searchBox.value);
  }

  showSearchBox() {
    this.isSearchBoxIconVisible = false;
    this.isSearchBoxVisible = true;
  }

  hideSearchBox() {
    this.isSearchBoxVisible = false;
    this.isSearchBoxIconVisible = true;
  }

}
