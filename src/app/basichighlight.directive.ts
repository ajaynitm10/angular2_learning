import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasichighlight]'
})
export class BasichighlightDirective implements OnInit {

  constructor(private elRef: ElementRef) { }
  
  ngOnInit(){
	  this.elRef.nativeElement.style.backgroundColor = 'green';
  }

}
