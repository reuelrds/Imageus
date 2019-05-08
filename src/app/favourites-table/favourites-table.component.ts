import { AfterViewInit, Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { FavouritesTableDataSource } from './favourites-table-datasource';
import { Image } from '../models/image';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'imageus-favourites-table',
  templateUrl: './favourites-table.component.html',
  styleUrls: ['./favourites-table.component.scss']
})
export class FavouritesTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: FavouritesTableDataSource;

  selection: SelectionModel<Image>;

  @Input() favouriteImages: Image[];
  @Output() selectedImages = new EventEmitter();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select', 'image', 'description', 'alt_description', 'name'];

  ngOnInit() {
    console.log(this.favouriteImages);
    this.dataSource = new FavouritesTableDataSource(this.paginator, this.sort, this.favouriteImages);

    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<Image>(allowMultiSelect, initialSelection);
  }
  ngAfterViewInit() {
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));

    console.log(this.selection);
    this.selectedImages.emit(this.selection.selected);
  }

  selectImage(row: Image) {
    console.log(this.selection);
    this.selectedImages.emit(this.selection.selected);
  }
}
