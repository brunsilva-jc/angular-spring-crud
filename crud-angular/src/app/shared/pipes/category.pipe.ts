import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'frontend development' : return 'code';
      case 'Backend development' : return 'computer'
    };
    return 'code';
  }

}
