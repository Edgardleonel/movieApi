import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { BannerComponent } from './banner/banner.component';
import { MovieComponent } from './movie/movie.component';
import { PopularComponent } from './popular/popular.component';
import { CategoriesComponent } from './categories/categories.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TopRatedComponent } from './top-rated/top-rated.component';

import { ApiService } from './service/api.service';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardComponent,
    BannerComponent,
    MovieComponent,
    PopularComponent,
    CategoriesComponent,
    NowPlayingComponent,
    UpcomingComponent,
    TopRatedComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
