import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FeedbackFormComponent } from './feedback-form/feedback-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
        { path: '', component: FeedbackFormComponent }
    ])
  ],
  declarations: [
    FeedbackFormComponent
  ]
})
export class FeedbackModule { }
