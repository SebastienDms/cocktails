import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[elementGras]',
})
export class ElementGras implements OnInit {
  @HostListener('mouseenter', ['$event']) private colorerJaune(
    event: MouseEvent
  ): void {
    console.log('Listener : ' + this.el);
    console.log('Event : ' + event);

    this.el.nativeElement.style.color = 'yellow';
  }
  @HostListener('mouseleave', ['$event']) private colorerNoir(
    event: MouseEvent
  ): void {
    console.log('Listener : ' + this.el);
    console.log('Event : ' + event);

    this.el.nativeElement.style.color = 'black';
  }

  constructor(private el: ElementRef<any>) {
    console.log(el);
  }

  ngOnInit(): void {
    this.el.nativeElement.style.fontWeight = 'bold';
  }
}
