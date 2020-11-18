import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {
  public movies;
  public page = '1';
  public totalItems;
  public moviesLimited;
  public open;
  public openCategory;
  public category = 'now_playing';

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.routeConfig.path) {
      this.open = false;
      this.openCategory = true;
    } else {
      this.open = true;
      this.openCategory = false;
    }
    this.getApi(this.page);
  }

  getApi(page) {
    this.api.getMovie(this.category, page).subscribe((res) => {
      this.movies = res;
      this.totalItems = this.movies.total_results;
      this.movies = this.movies.results;
      this.moviesLimited = this.movies.filter((res, i) => i <= 5 );
    });
  }

  emitPage(event) {
    console.log('event', event);
    this.getApi(event);
  }
}
