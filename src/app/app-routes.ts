import { Routes } from '@angular/router';

import { GamesCatalogComponent } from './games-catalog/components/catalog/games-catalog.component';
import {SiteComponent} from './sites/components/site/site.component';
import {SiteGamesComponent} from './site-games/components/catalog/site-games.component';
import {GameComponent} from './site-games/components/game/game.component';

export const routes: Routes = [
  { path: '', component: GamesCatalogComponent },
  { path: 'games-catalog', component: GamesCatalogComponent },
  { path: 'sites/site/:name/:id', component: SiteComponent },
  { path: 'sites/site/:name/:id/games', component: SiteGamesComponent },
  { path: 'sites/site/:name/:id/games/:gameId', component: GameComponent },
];
