import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../store/app.reducer';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.sass']
})
export class Comp2Component implements OnInit {

  counter: Number = 0;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.store.select(fromRoot.getCounter).subscribe(counter => {
      this.counter = counter;
    });
  }

}
