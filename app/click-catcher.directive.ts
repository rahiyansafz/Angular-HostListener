import { Directive, HostListener } from '@angular/core';

@Directive({selector: '[clickCatcher]'})
export class ClickCatcher {

  @HostListener('click', ['$event.target.id']) onClick(id: any) {
    alert(`You clicked on ${id}`);
  } 

}