import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public categories = [
    {name: 'Popular', slug: 'popular'},
    {name: 'Em Cartaz', slug: 'now_playing'},
    {name: 'Próximas Estreias', slug: 'upcoming'},
    {name: 'Mais Bem Avaliados', slug: 'top_rated'}
  ];
  public searchText;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    console.log('search', this.searchText);
    this.api.searchInput = this.searchText;
    this.router.navigateByUrl('/search');
    this.closeSearch();
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

  openSearch() {
    document.getElementById('search-model').style.display = 'block';
  }

  closeSearch() {
    document.getElementById('search-model').style.display = 'none';
  }

}
