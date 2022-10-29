import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'study'
})
export class StudyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + "nth";
  }

}
