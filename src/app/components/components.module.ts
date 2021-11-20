import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { MovieSlidesComponent } from './movie-slides/movie-slides.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule,
    PipesModule,
  ],
  declarations: [
    MovieSlidesComponent,
  ],
  exports: [
    MovieSlidesComponent,
  ]
})
export class ComponentsModule { }
