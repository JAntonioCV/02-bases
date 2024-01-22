import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{counter}}</h3>
             <button (click)="increaseby(+1)">+1</button>
             <button (click)="reset()">Reset</button>
             <button (click)="increaseby(-1)">-1</button>`
  })
export class CounterComponent {
  public counter: number = 10;

  increaseby(value: number): void {
    this.counter += value;
  }

  reset(): void
  {
    this.counter = 10;
  }
}
