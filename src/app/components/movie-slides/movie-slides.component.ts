import { Component, Input } from '@angular/core';
import SwiperCore, { FreeMode } from "swiper";

import { Movie } from '../../interfaces/movie';

SwiperCore.use([FreeMode]);

@Component({
  selector: 'app-movie-slides',
  templateUrl: './movie-slides.component.html',
  styleUrls: ['./movie-slides.component.scss'],
})
export class MovieSlidesComponent {
  @Input() imagePath: 'backdrop_path' | 'poster_path' = 'poster_path';
  @Input() movies: Movie[] = [];
}
