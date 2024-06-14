import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';

  constructor(){
    // No Async
    // before render
    console.log("constructor");
    console.log("-".repeat(10));

  }

  ngOnChanges(changes: SimpleChange){
    // before and during render
    console.log("constructor");
    console.log("-".repeat(10));
    console.log(changes);
  }
}
