import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chatPipe'
})
export class ChatPipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log(value)
    return 'date';
  }

}
