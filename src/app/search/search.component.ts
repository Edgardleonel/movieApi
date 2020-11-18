import { Component, OnInit } from '@angular/core';
import { ApiService } from './../service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public movies;
  public totalItems;
  public page = '1';
  public resultSearch;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.resultSearch = this.api.searchInput;
    this.getApi(this.resultSearch, this.page);
  }

  getApi(value, page) {
    this.api.getSearch(value, page).subscribe((res) => {
      this.movies = res;
      this.totalItems = this.movies.total_results;
      this.movies = this.movies.results;
      console.log('search movies', this.movies);
    });
  }

  emitPage(event) {
    console.log('event', event);
    this.getApi(this.resultSearch, event);
  }

}
