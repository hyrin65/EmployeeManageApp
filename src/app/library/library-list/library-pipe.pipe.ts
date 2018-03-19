import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'libraryPipe'
})
export class LibraryPipePipe implements PipeTransform {

    transform(value: any, filter: Object): any {
        if (!value || !filter) {
            return value;
        } else if(filter == -1) {
            return value;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return value.filter(item => item.empId == filter);
    }

}
