import * as actions from './sites.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

// Main data interface

export interface Site {
  id: string;
  name: string;
}

// Entity adapter
export const sitesAdapter = createEntityAdapter<Site>();
export interface State extends EntityState<Site> { }

export const initialState: State = sitesAdapter.getInitialState();

// Reducer

export function sitesReducer(
  state: State = initialState,
  action: actions.GameActions) {

  switch (action.type) {

    case actions.LOAD_SITES_SUCCESS:
      return sitesAdapter.addMany(action['sites'], state);

    case actions.CREATE:
      return sitesAdapter.addOne(action['sites'], state);

    case actions.UPDATE:
      return sitesAdapter.updateOne({
        id: action['id'],
        changes: action['changes'],
      }, state);

    case actions.DELETE:
      return sitesAdapter.removeOne(action['id'], state)

    default:
      return state;
  }

}

// Create the default selectors

export const getSitesState = createFeatureSelector<State>('sites');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = sitesAdapter.getSelectors(getSitesState);
