import { Pipe, PipeTransform } from '@angular/core';
import { LocaleService } from '../locale/locale.service';

@Pipe({
  name: 'locale',
  pure: false
})
export class LocalePipe implements PipeTransform {

  constructor(private _locale: LocaleService){

  }

  transform(value: any, langType?:string): any {
    if(!value) return value;

    return this._locale.instant(value, langType);
  }

}
