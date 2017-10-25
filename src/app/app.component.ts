import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LoggingService } from './logging-service/logging.service';
import { LocaleService } from './locale/locale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  childdata: string = '';
  userData = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];
  supportedLangs = [];
  checkingVal: string;
  langType: string = '';

  constructor( private loggingService: LoggingService, private _locale: LocaleService ){
	  this.loggingService.userDataLogged.subscribe((data) => {
		  alert('new data '+ data)
	  })
  }
  
  ngOnInit(){
	  this.supportedLangs = [
        { display: 'English', value: 'en' },
        { display: 'Español', value: 'es' },
        { display: '华语', value: 'zh' },
      ];
      
      this.checkingVal = 'hello ng2';
      this.selectLang('es');
  }

  isCurrentLang(lang: string) {
      return lang === this._locale.currentLang;
    }

  selectLang(lang: string){
    this._locale.use(lang);
  }
  
  handedtoParent(user){
	  this.childdata = user;
  }
  
}
