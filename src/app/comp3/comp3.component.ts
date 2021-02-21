import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../store/app.reducer';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.sass']
})
export class Comp3Component implements OnInit {

  firstname: String = '';
  lastname: String = '';

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.store.select(fromRoot.getFirstname).subscribe(firstname => {
      this.firstname = firstname;
    });
    this.store.select(fromRoot.getLastname).subscribe(lastname => {
      this.lastname = lastname;
    });

    this.store.select(fromRoot.getUserState).subscribe(state => {
      console.log("🚀 ~ file: comp3.component.ts ~ line 27 ~ Comp3Component ~ this.store.select ~ state", state);
    });

  }

}
