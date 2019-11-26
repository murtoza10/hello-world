import {Pipe, PipeTransform} from '@angular/core'
@Pipe({
    name: 'readmore'
})
export class ReadMorePipe implements PipeTransform{
    transform(value: string, limit?: number){
        if(!value) return null;
        let givenLimit =(limit)? limit:50;
        return value.substr(0,givenLimit)+ '....'
    }
}