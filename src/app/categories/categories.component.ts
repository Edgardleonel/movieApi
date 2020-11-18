import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Output() pageEmit = new EventEmitter();
  public perPage = 20;
  @Input() totalItems;
  @Input() movies;
  public page;


  constructor() { }

  ngOnInit(): void {
  }

  getPage(event) {
    this.pageEmit.emit(event);
  }

}
