import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  
  // Task 12: Modify the following transform() function 
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
