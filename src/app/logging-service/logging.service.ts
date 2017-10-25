import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LoggingService {
	
	userDataLogged = new EventEmitter<string>();

  constructor() { }
  
  emitData(valueFromUser: string){
	  this.userDataLogged.emit(valueFromUser);
  }

}
