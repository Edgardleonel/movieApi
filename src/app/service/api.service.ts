import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  readonly url = environment.baseUrl;
  private key = environment.key;
  public language = environment.language;

  getMovie(slug, page): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/${slug}?api_key=${this.key}&language=${this.language}&page=${page}`);
  }

  getMovieDetail(movieId): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/${movieId}?api_key=${this.key}&language=${this.language}`);
  }

  getVideo_MovieDetail(movieId): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/${movieId}/videos?api_key=${this.key}&language=${this.language}`);
  }

}
