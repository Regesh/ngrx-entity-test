import { Action } from '@ngrx/store';
import { Site } from './sites.reducer';

const baseString = '[sites]';
export const LOAD_SITES = `${baseString} Load Sites`;
export const LOAD_SITES_SUCCESS = `${baseString} Load Sites Success`;
export const CREATE = `${baseString} Create`;
export const UPDATE = `${baseString} Update`;
export const DELETE = `${baseString} Delete`;

export class LoadSites implements Action {
  readonly type = LOAD_SITES;
}

export class LoadSitesSuccess implements Action {
  readonly type = LOAD_SITES_SUCCESS;
  constructor(public sites: Site[]) { }
}

export class Create implements Action {
  readonly type = CREATE;
  constructor(public game: Site) { }
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(
    public id: string,
    public changes: Partial<Site>,
  ) { }
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public id: string) { }
}

export type GameActions
= Create
| Update
| Delete
| LoadSites
| LoadSitesSuccess;
