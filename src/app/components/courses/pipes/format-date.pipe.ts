import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: Date): string {
    let formatDate: string;
    formatDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    return formatDate;
  }

}
