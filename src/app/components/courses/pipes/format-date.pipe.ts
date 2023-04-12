import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: Date): string {
    let formatDate: string;
    let newDate: Date = new Date(date);
    let day: string = ("0" + newDate.getDate()).slice(-2);
    let month: string = ("0" + (newDate.getMonth() + 1)).slice(-2);
    let year: string = newDate.getFullYear().toString();
    formatDate = `${day}-${month}-${year}`;
    return formatDate;
  }

}
