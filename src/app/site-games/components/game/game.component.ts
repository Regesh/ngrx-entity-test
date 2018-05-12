import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Site} from '../../../sites/store/sites.reducer';
import { Store } from '@ngrx/store';
import { LoadGames } from '../../store/site-games.actions';
import * as fromSiteGames from '../../store/site-games.reducer';

@Component({
  selector: 'game',
  template: `
    {{gameId}}
  `
})
export class GameComponent implements OnInit {
  gameId: string;
  site: Site;

  constructor(
    private _route: ActivatedRoute,
    private _store: Store<fromSiteGames.State>
  ) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.site = {
        id: params['id'],
        name: params['name']
      };
      this._store.dispatch(new LoadGames(this.site.id));
      this.gameId = params['gameId'];
    });
  }
}
