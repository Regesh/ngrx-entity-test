import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { catchError, mergeMap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { LOAD_GAMES, LoadGamesSuccess } from './game-catalog.actions';
import {GameService} from '../services/game-catalog.service';

@Injectable()
export class GameEffects {

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(LOAD_GAMES),
    mergeMap(action =>
      this._gameService.loadGames()
        .map(games => new LoadGamesSuccess(games['result']))
    )
  );

  constructor(private http: HttpClient,
              private actions$: Actions,
              private _gameService: GameService) {}
}
