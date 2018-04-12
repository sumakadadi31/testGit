import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { EllipsizePipe } from './ellipsize/ellipsize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StarRatingComponent, EllipsizePipe],
  exports: [
      StarRatingComponent,
      EllipsizePipe
  ]
})
export class SharedModule { }