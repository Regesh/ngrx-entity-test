import { ActionReducerMap } from '@ngrx/store';
import {gameCatalogReducer} from '../games-catalog/store/game-catalog.reducer';
import { siteGamesReducer } from '../site-games/store/site-games.reducer';
import { sitesReducer } from '../sites/store/sites.reducer';

export const reducers: ActionReducerMap<any> = {
  gamesCatalog: gameCatalogReducer,
  siteGames: siteGamesReducer,
  sites: sitesReducer
}
