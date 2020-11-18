import { ApiService } from './../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
public movie;
public video;

  constructor(private route: ActivatedRoute, private api: ApiService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.api.getMovieDetail(id).subscribe(res => {
      this.movie = res;
      console.log('movie', this.movie);
    });

    this.api.getVideo_MovieDetail(id).subscribe(res => {
      this.video = res;
      console.log('video', this.video);
      const link = String(this.video.results[0].key);
      this.video = this.sanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/embed/' + link);
    });
  }

  openModal() {
    document.getElementById('staticBackdrop').style.display = 'block';
    document.getElementById('staticBackdrop').style.opacity = '1';
  }

  closeModal() {
    document.getElementById('staticBackdrop').style.display = 'none';
    document.getElementById('staticBackdrop').style.opacity = '0';
  }

}
