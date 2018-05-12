import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SiteseEffects } from './store/sites.effect';

import { sitesReducer } from './store/sites.reducer';

import { SiteComponent } from './components/site/site.component';

import { SitesService } from './services/sites.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([SiteseEffects]),
    StoreModule.forFeature('sites', sitesReducer)
  ],
  declarations: [SiteComponent],
  exports: [SiteComponent]
})
export class SitesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SitesModule,
      providers: [SitesService]
    };
  }
}
