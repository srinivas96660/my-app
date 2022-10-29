import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipepractice'
})
export class PipepracticePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + "passout";
  }

}
