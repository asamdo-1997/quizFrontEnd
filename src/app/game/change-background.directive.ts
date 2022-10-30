import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {style} from "@angular/animations";

@Directive({
  selector: '[appChangeBackground]'
})
export class ChangeBackgroundDirective {

  @Input() isCorrect : boolean = false;
  constructor(private ef:ElementRef, private render:Renderer2) { }
  @HostListener('click') anwser(){
    if(this.isCorrect){
      this.render.setStyle(this.ef.nativeElement, 'background', 'green');
    }else {
      this.render.setStyle(this.ef.nativeElement, 'background', 'red');

    }
  }
}
