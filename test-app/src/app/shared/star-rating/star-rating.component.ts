import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit, OnChanges {
    fullWidth : number = 86;
    outerWidth : number = 86;
    
    @Input()
    rating : number;

    @Output()
    ratingChange: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
        console.log( this.rating );
        this.setOuterWidth();
    }

    ngOnChanges() {
        console.log( 'ngOnChanges' );
        this.setOuterWidth();
    }

    setOuterWidth() {
        this.outerWidth = this.fullWidth * this.rating / 5;
    }

    setRating( newStarRating ) {
        // this.rating = newStarRating;
        // this.setOuterWidth();
        this.ratingChange.emit( newStarRating );
    }
}
