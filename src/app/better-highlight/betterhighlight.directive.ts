import { Directive, Input, OnInit, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit {
	
	@Input('appBetterhighlight') inputColor: string;
	@HostBinding('style.backgroundColor') backgroundColor: string;
	

	constructor(private renderer: Renderer2, private elRef:ElementRef) { }
  
	ngOnInit(){
		  
	}
  
	@HostListener('mouseenter') mouseover(eventData: Event){
		//this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'yellow')
		this.backgroundColor = 'yellow';
	}
	
	@HostListener('mouseleave') mouseleave(eventData: Event){
		//this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', this.inputColor)
		this.backgroundColor = this.inputColor;
	}

}
