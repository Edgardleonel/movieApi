import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
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
