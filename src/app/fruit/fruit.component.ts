import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss'],
})
export class FruitComponent implements OnInit {
  @Input() fruit: string = '';
  @Output() eventDeleteF: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteFruit() {
    this.eventDeleteF.emit(this.fruit);
  }
}
