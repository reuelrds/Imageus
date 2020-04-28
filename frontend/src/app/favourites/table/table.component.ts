import { Component, OnInit, ViewChild, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

import { Image } from '../../shared/models/image';
import { TableDataSource } from './table-datasource';

@Component({
  selector: 'imageus-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource: TableDataSource;

  selection: SelectionModel<Image>;

  @Input() favouriteImages: Image[];
  @Output() selectedImages = new EventEmitter();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select', 'image', 'description', 'alt_description', 'name'];

  ngOnInit() {
    console.log(this.favouriteImages);

    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<Image>(allowMultiSelect, initialSelection);
    this.dataSource = new TableDataSource(this.paginator, this.sort, this.favouriteImages);
  }
  ngAfterViewInit() {
    this.selection.clear();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));

    console.log(this.selection);
    this.selectedImages.emit(this.selection.selected);
  }

  selectImage(row) {
    this.selection.select(row);
    this.selectedImages.emit(this.selection.selected);
  }
}
