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
    console.log("ngOnChanges");
    console.log("-".repeat(10));
    console.log(changes);
  }

  ngOnInit(){
    // after render
    // una vez
    // async, then, subs
    console.log("ngOnInit")
    console.log("-".repeat(10));
    console.log("duration =>", this.duration)
    console.log("message =>", this.message)
  }

  ngAfterViewInit(){
    // after render
    //  hijos ya fueron rederizados/pintados
    console.log("ngAfterViewInit")
    console.log("-".repeat(10));
  }

  ngOnDestroy(){
    console.log("ngAfterViewInit")
    console.log("-".repeat(10));
  }
}
