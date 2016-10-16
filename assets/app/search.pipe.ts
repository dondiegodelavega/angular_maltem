import { Pipe, PipeTransform, Injectable } from "@angular/core"

@Pipe({
    name : "searchPipe"
})

@Injectable()
export class SearchPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        if(!args){ // if no text entered
            return items;
        }else{
            // filter the result by name
            var result = items.filter(item => item.ename.indexOf(args) !== -1);
            // if no result found return all
            if(result.length == 0){
                result = items;
            }
            return result;
        }
    }
}

