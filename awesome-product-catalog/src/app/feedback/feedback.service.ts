import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedbackService {
  private _feedbackUrl = 'http://localhost:4201/feedback';
  private _http: Http;

  constructor( http: Http ) {
    this._http = http;
  }

  sendFeedback(feedback ): Observable<Response> {
    return this._http.post( this._feedbackUrl, feedback ).map( response => response.json() );
  }
}
