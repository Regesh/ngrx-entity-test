import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromSiteGames from '../../store/site-games.reducer';
import {Observable} from 'rxjs/Observable';
import { LoadGames, DeleteAll } from '../../store/site-games.actions';

@Component({
  selector: 'site-games',
  template: `
    <ul>
      <li *ngFor="let game of games$ | async">
        <a [routerLink]="game.id">{{game.Description}}</a>
      </li>
    </ul>
  `
})
export class SiteGamesComponent implements OnInit{

  public games$: Observable<fromSiteGames.Game[]> = this._store.select(fromSiteGames.selectAll);

  constructor(
    private _store: Store<fromSiteGames.State>,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._store.dispatch(new DeleteAll());
    this._route.params.subscribe(params => {
      this._store.dispatch(new LoadGames(params['id']));
    });
  }

}
