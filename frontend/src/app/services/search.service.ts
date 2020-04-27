import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchQuerySource = new Subject<string>();
  searchQuery$ = this.searchQuerySource.asObservable();

  constructor() {}

  sendQuery(query: string) {
    console.log(query);
    this.searchQuerySource.next(query);
  }
}
