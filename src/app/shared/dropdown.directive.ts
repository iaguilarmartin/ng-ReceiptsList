import { HostBinding, Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropDownDirective {
  // constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    // const DROPDOWN_OEPN_CLASS = 'open';
    // const nativeElement = this.elementRef.nativeElement;

    // if (nativeElement.classList.contains(DROPDOWN_OEPN_CLASS)) {
    //   this.renderer.removeClass(nativeElement, DROPDOWN_OEPN_CLASS);
    // } else {
    //   this.renderer.addClass(nativeElement, DROPDOWN_OEPN_CLASS);
    // }

    this.isOpen = !this.isOpen;
  }
}
