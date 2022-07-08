import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[elementGras]',
})
export class ElementGras implements OnInit {
  constructor(private element: ElementRef<any>) {
    console.log(element);
  }

  ngOnInit(): void {
    this.element.nativeElement.style.fontWeight = 'bold';
  }
}
