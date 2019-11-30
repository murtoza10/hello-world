import { Directive,Input,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format;
  constructor(private el: ElementRef) { }
  @HostListener('focus') onFocus(){
    console.log("focused");
  }

  @HostListener('blur') onBlur(){
    let value:string = this.el.nativeElement.value;
    if(this.format=='lowercase') this.el.nativeElement.value= value.toLowerCase();
    else this.el.nativeElement.value= value.toUpperCase();
  }

}
