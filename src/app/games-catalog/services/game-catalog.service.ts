import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Game} from '../store/game-catalog.reducer';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GameService {

  constructor(
    private _http: HttpClient
  ) {}

  loadGames(): Observable<Game[]> {
      return this._http.get<Game[]>('./assets/jsons/games-catalog/games.json');
  }
}
