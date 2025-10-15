import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  transform(value: unknown): unknown {
    if (value == "" || value == null || value == undefined) {
      return "NA";
    } else {
      return value;
    }
  }

}
