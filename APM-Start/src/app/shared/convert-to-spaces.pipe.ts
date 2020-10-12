import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'convertToSpaces' //name referenced in the html
})

export class ConvertToSpacesPipe implements PipeTransform{
    
    transform(value: string, char: string) : string {
        
        return value.replace(char, ' ');
        
    }

}