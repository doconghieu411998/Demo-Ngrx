import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from './counter.action';
import { decrement } from './counter.action';
import { reset } from './counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$!: Observable<number>
  constructor(private store: Store<{count: number}>) {
    this.count$ = store.select('count')
  }
  increment() {
    this.store.dispatch(increment())
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}
