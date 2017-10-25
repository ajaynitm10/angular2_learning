import { Injectable, Inject } from '@angular/core';
import { LOCALE } from './locale';

@Injectable()
export class LocaleService {

  private _currentLang: string;

  public get currentLang() {
    return this._currentLang;
  }

  constructor(@Inject(LOCALE) private _locale: any) { }

  public use(lang: string) {
    this._currentLang = lang;
  }

  private locale(key: string, langType?:string): string {
		let translation = key;
    if(langType !== ''){
      this._currentLang = langType;
    }
    if (this._locale[this.currentLang] && this._locale[this.currentLang][key]) {
			return this._locale[this.currentLang][key];
		}

		return translation;
	}

	public instant(key: string, langType?:string) {
		return this.locale(key, langType); 
	}

}
