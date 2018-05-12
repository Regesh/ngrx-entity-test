import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromSites from './sites/store/sites.reducer';
import { LoadSites } from './sites/store/sites.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public sites$: Observable<fromSites.Site[]> = this._store.select(fromSites.selectAll);
  constructor(
    private _store: Store<fromSites.State>
  ) {}

  ngOnInit() {
    this._store.dispatch(new LoadSites());
  }

}
