import { Component } from '@angular/core';
import { Person } from '../common/utils';

@Component({
    templateUrl: './app.component.html',
    /*template: ` // inline alternative to templateUrl
        <h1>{{title}}</h1>
    `,*/
    // inline alternative to styleUrls
    styles: [
        `
        h1 {
            color: crimson;
        }
        `
    ],
    styleUrls: [
        './app.component.css'
    ],
    selector: 'app-root'
})
export class AppComponent {
    title : string = 'Hello, Angular';
    person: Person = new Person( 'John', 32 );
}