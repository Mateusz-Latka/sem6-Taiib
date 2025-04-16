import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPodswietlanie]'
})
export class PodswietlanieDirective {
  @HostBinding('class.podswietl') podswietlanie = false;
  @HostListener('mouseleave') onMouseLeave(){this.podswietlanie = false;}
  @HostListener('mouseenter') onMouseEnter() {this.podswietlanie = true;}
  

  constructor() { }

}
