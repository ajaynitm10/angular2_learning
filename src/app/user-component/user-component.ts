import { Component,
		 OnInit,
		 Input,
		 Output,
		 EventEmitter,
		 ElementRef,
		 ViewChild, 
		 ContentChild } from '@angular/core';
import { LoggingService } from '../logging-service/logging.service'

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.html',
  styleUrls: ['./user-component.css']
})
export class UserComponent implements OnInit {
	
	title: string = '';
	@Input() appName;
	@Output() userUpdated = new EventEmitter();
	@ViewChild('templateRef') templateRef: ElementRef;
	@ContentChild('contentData') paragraphData: ElementRef;
	
  constructor( private loggingService: LoggingService ) { }

  ngOnInit() {
	  this.title = 'Angular 2';
	  console.log(this.appName);
	  this.userUpdated.emit('hello');
	  
  }
  
  ngAfterContentInit(){
	  console.log(this.paragraphData.nativeElement.textContent)
  }
  
  onClick(){
	  this.loggingService.emitData(this.templateRef.nativeElement.value);
	  
  }
  
  
	
}
