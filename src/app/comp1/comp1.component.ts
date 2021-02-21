import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../store/app.reducer';
import * as fromUser from '../store/user-store/user.actions';
import * as fromCounter from '../store/counter-store/counter.actions';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.sass']
})
export class Comp1Component {

  firstname = '';
  lastname = '';
  counter = 0;

  constructor(private store: Store<fromRoot.State>) { }

  onIncrementClick(): void {
    this.store.dispatch(new fromCounter.Increment());
  }
  onDecrementClick(): void {
    this.store.dispatch(new fromCounter.Decrement());
  }
  onResetClick(): void {
    this.store.dispatch(new fromCounter.Reset());
  }

  ////////////////////////////////////////////////////////////////////////////

  onFirstnameKeyup(): void {
    this.store.dispatch(new fromUser.SetFirstname(this.firstname));
  }

  onLastnameKeyup(): void {
    this.store.dispatch(new fromUser.SetLastname(this.lastname));
  }

}
