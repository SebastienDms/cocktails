import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[elementGras]',
})
export class ElementGras implements OnInit {
  @HostListener('mouseenter', ['$event']) private colorerJaune(
    event: MouseEvent
  ): void {
    console.log('Listener : ' + this.el);
    console.log('Event : ' + event);

    this.el.nativeElement.style.color = this.surlignageColor.color;
    this.el.nativeElement.style.backgroundColor =
      this.surlignageColor.backgroundColor;
  }
  @HostListener('mouseleave', ['$event']) private colorerNoir(
    event: MouseEvent
  ): void {
    console.log('Listener : ' + this.el);
    console.log('Event : ' + event);

    this.el.nativeElement.style.color = 'black';
    this.el.nativeElement.style.backgroundColor = 'white';
  }

  // @Input('elementGras') public surlignageColor!: string;
  @Input('elementGras') public surlignageColor!: {
    color: string;
    backgroundColor: string;
  };

  constructor(private el: ElementRef<any>) {
    console.log(el);
  }

  ngOnInit(): void {
    this.el.nativeElement.style.fontWeight = 'bold';
  }
}
