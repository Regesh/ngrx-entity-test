import { Action } from '@ngrx/store';
import { Game } from './game-catalog.reducer';

const baseString = '[GamesCatalog]';
export const LOAD_GAMES = `${baseString} Load Games`;
export const LOAD_GAMES_SUCCESS = `${baseString} Load Games Success`;
export const CREATE = `${baseString} Create`;
export const UPDATE = `${baseString} Update`;
export const DELETE = `${baseString} Delete`;

export class LoadGames implements Action {
  readonly type = LOAD_GAMES;
}

export class LoadGamesSuccess implements Action {
  readonly type = LOAD_GAMES_SUCCESS;
  constructor(public games: Game[]) { }
}

export class Create implements Action {
  readonly type = CREATE;
  constructor(public game: Game) { }
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(
    public id: string,
    public changes: Partial<Game>,
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
| LoadGames
| LoadGamesSuccess;
