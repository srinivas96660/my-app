import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clothes'
})
export class ClothesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
