import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student';

@Pipe({
  name: 'formatName'
})
export class FormatNamePipe implements PipeTransform {

  transform(name:string, lastName:string): string {
    let fullName: string;
    fullName = name.concat(' ',lastName)
    return fullName;
  }

}
