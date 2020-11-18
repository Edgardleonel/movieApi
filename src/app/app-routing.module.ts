import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { PopularComponent } from './popular/popular.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'popular', component: PopularComponent},
  {path: 'now_playing', component: NowPlayingComponent},
  {path: 'upcoming', component: UpcomingComponent},
  {path: 'top_rated', component: TopRatedComponent},
  {path: 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
