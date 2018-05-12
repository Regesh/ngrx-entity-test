import * as actions from './site-games.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

// Main data interface

export interface Game {
  id: string;
  Description: string;
}

// Entity adapter
export const gameAdapter = createEntityAdapter<Game>();
export interface State extends EntityState<Game> { }

export const initialState: State = gameAdapter.getInitialState();

// Reducer

export function siteGamesReducer(
  state: State = initialState,
  action: actions.GameActions) {

  switch (action.type) {

    case actions.LOAD_GAMES_SUCCESS:
      return gameAdapter.addMany(action['games'], state);

    case actions.CREATE:
      return gameAdapter.addOne(action['game'], state);

    case actions.UPDATE:
      return gameAdapter.updateOne({
        id: action['id'],
        changes: action['changes'],
      }, state);

    case actions.DELETE:
      return gameAdapter.removeOne(action['id'], state)

    case actions.DELETE_ALL:
      return gameAdapter.removeAll(state);

    default:
      return state;
  }

}

// Create the default selectors

export const getGamesCatalogState = createFeatureSelector<State>('siteGames');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = gameAdapter.getSelectors(getGamesCatalogState);
