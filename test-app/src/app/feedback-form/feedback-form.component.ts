import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {
    emailid: string;
    message: string;

    constructor() { }

    sendFeedback( formValues ) {
        console.log( formValues );
    }
}
