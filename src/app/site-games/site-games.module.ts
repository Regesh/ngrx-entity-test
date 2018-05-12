import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './store/site-games.effect';

import { siteGamesReducer } from './store/site-games.reducer';

import { SiteGamesService } from './services/site-games.service';
import {SiteGamesComponent} from './components/catalog/site-games.component';
import { GameComponent } from './components/game/game.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([GameEffects]),
    StoreModule.forFeature('siteGames', siteGamesReducer)
  ],
  declarations: [SiteGamesComponent, GameComponent],
  exports: [SiteGamesComponent, GameComponent]
})
export class SiteGamesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SiteGamesModule,
      providers: [SiteGamesService]
    };
  }
}
