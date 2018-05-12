import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Game} from '../store/site-games.reducer';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SiteGamesService {

  constructor(
    private _http: HttpClient
  ) {}

  loadGames(siteID): Observable<Game[]> {
      return this._http.get<Game[]>('./assets/jsons/site-games/' + siteID + '/games.json');
  }
}
