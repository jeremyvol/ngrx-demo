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
    // this.store.select(fromRoot.counterSelector).subscribe(state => {
    //   console.log("🚀 ~ file: comp2.component.ts ~ line 19 ~ Comp2Component ~ this.store.select ~ state", state);

    //   // this.counter = counter;
    // });
  }

}
