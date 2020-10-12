import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector:'app-message', //<app-message> </app-message>
    templateUrl: './message.component.html',
    styleUrls:['./message.component.css'] //array for adding multiple styles
    })

 export class MessageComponent implements OnChanges{
       
    constructor() {
    }
    ngOnChanges(changes: SimpleChanges): void {
        throw new Error('Method not implemented.');
    }
}