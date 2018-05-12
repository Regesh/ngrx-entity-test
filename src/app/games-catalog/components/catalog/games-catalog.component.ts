import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromGamesCatalog from '../../store/game-catalog.reducer';
import {Observable} from 'rxjs/Observable';
import { LoadGames } from '../../store/game-catalog.actions';

@Component({
  selector: 'games-catalog',
  template: `
    <ul>
      <li *ngFor="let game of games$ | async">
        {{game.Description}}
      </li>
    </ul>
  `
})
export class GamesCatalogComponent implements OnInit{

  public games$: Observable<fromGamesCatalog.Game[]> = this._store.select(fromGamesCatalog.selectAll);

  constructor(
    private _store: Store<fromGamesCatalog.State>
  ) { }

  ngOnInit() {
    this._store.dispatch(new LoadGames());
  }

}
