import { Directive, HostListener, HostBinding, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appDropdowndirective]'
})
export class DropdowndirectiveDirective {
  @Input() show = 'show';
  @HostBinding('class.show') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.elementRef.nativeElement.querySelector('.dropdown-toggle').attributes['aria-expanded'].nodeValue = this.isOpen;
  }
  constructor(private elementRef: ElementRef, renderer: Renderer2) { }

}
