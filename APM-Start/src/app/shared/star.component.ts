import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector:'star-rating', //<star-rating> </star=rating>
    templateUrl: './star.component.html',
    styleUrls:['./star.component.css'] //array for adding multiple styles
    })

export class StarComponent implements OnChanges{
    @Input() rating : number; //to set this on the ui use [rating] = 'x.propvalue'
    starWidth : number; 
constructor() {

}
   
ngOnChanges(): void {
this.starWidth = this.rating * 75 / 5;    
}

}
