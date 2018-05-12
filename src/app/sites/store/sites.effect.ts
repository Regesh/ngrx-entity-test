import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { catchError, mergeMap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { LOAD_SITES, LoadSitesSuccess } from './sites.actions';
import { SitesService } from '../services/sites.service';

@Injectable()
export class SiteseEffects {

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(LOAD_SITES),
    mergeMap(action =>
      this._sitesService.loadSites()
        .map(sites => new LoadSitesSuccess(sites['result']))
    )
  );

  constructor(private http: HttpClient,
              private actions$: Actions,
              private _sitesService: SitesService) {}
}
