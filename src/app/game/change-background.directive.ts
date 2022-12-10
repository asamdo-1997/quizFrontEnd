import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {style} from "@angular/animations";
import {GameService} from "../services/game.service";

@Directive({
  selector: '[appChangeBackground]'
})
export class ChangeBackgroundDirective {


  @Input() isCorrect: boolean = false;

  constructor(private ef: ElementRef, private render: Renderer2, private gameService: GameService) {
   /* this.gameService.answerChecked.subscribe(
      result => {
        if (result) {
          this.render.setStyle(this.ef.nativeElement, 'background', 'green');
        } else {
          this.render.setStyle(this.ef.nativeElement, 'background', 'red');

        }
      }
    )

    */
  }

@HostListener('click') anwser() {
    this.gameService.answerChecked.subscribe(
      result => {
        if (result) {
          this.render.setStyle(this.ef.nativeElement, 'background', 'green');
        } else {
          this.render.setStyle(this.ef.nativeElement, 'background', 'red');

        }
      }
    )

  }


}
