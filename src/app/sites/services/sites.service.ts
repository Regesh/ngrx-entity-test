import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Site} from '../store/sites.reducer';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SitesService {

  constructor(
    private _http: HttpClient
  ) {}

  loadSites(): Observable<Site[]> {
      return this._http.get<Site[]>('./assets/jsons/sites.json');
  }
}
