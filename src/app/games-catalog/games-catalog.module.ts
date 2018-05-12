import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './store/game-catalog.effect';

import { gameCatalogReducer } from './store/game-catalog.reducer';

import { GameService } from './services/game-catalog.service';
import {GamesCatalogComponent} from './components/catalog/games-catalog.component';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GameEffects]),
    StoreModule.forFeature('gamesCatalog', gameCatalogReducer)
  ],
  declarations: [ GamesCatalogComponent ],
  exports: [ GamesCatalogComponent ]
})
export class GameCatalogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GameCatalogModule,
      providers: [GameService]
    };
  }
}
