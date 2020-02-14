import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'time'
})
export class CustomDatePipePipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == 0) return '';
    var result = super.transform(value, 'HH:mm:ss');
    return result;
  }

}