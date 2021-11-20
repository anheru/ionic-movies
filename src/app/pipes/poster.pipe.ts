import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): unknown {
    if (!img) {
      return './assets/no-image-banner.jpg';
    }

    return `${environment.imageUrl}/${size}${img}`
  }

}
