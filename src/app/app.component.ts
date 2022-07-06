import { Component, ElementRef, ViewChild } from '@angular/core';
import { Cocktail } from './interfaces/cocktail.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cocktails';

  @ViewChild('myinput', { static: true })
  public element!: ElementRef<HTMLInputElement>;

  // public fruit: string = '';
  public fruits: string[] = ['Fraises', 'Kiwis', 'Bananes'];

  public addFruit(/*reference: HTMLInputElement*/) {
    console.log(this.element.nativeElement.value);
    this.fruits.push(this.element.nativeElement.value);

    //Test 2
    // console.log(reference.value);
    // this.fruits.push(reference.value);
    // reference.value = '';
    // Test 1
    // console.log(this.fruit);
    // this.fruits.push(this.fruit);
    // this.fruit = '';
    // console.log(this.fruits);
  }

  public deleteFruit(fruit: string) {
    this.fruits = this.fruits.filter((f) => f !== fruit);
    console.log(this.fruits);
  }
}
