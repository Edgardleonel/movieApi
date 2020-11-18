import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
public movies;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getMovie('now_playing', '1').subscribe((res) => {
      this.movies = res;
      this.movies = this.movies.results.filter((res, i) => i <= 5 );
    });
  }

}
