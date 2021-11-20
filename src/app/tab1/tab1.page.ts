import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../interfaces/movie';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  popularMovies$: Observable<Movie[]>;
  premiereMovies$: Observable<Movie[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.popularMovies$ = this.apiService.getPopularMovies().pipe(map(response => response.results))
    this.premiereMovies$ = this.apiService.getPremiereMovies().pipe(map(response => response.results))
  }
}
