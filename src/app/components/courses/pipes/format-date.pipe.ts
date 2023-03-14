import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: Date): string {
    let formatDate: string;
    formatDate = `${date.toString()}`
    return formatDate;
  }

}
