import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  public i : number = 0
  transform(value: number, ...args: any[] | number[]): number {
    console.log(`nombre d'appel du pipe : ${this.i}`)
    this.i ++
    
    value = Math.pow(value, args[0])
    return value;
  }

}
