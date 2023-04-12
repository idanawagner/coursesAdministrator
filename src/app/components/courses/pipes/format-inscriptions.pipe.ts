import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatInscriptions'
})
export class FormatInscriptionsPipe implements PipeTransform {

  transform(inscriptions: boolean): string {
    if (inscriptions){
      return 'Open'
    }else{
      return 'Close'
    }
  }

}
