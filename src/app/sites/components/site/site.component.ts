import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Site} from '../../store/sites.reducer';

@Component({
  selector: 'site',
  template: `
    {{currentSite | json}}
    <button mat-button [routerLink]="'games'">games</button>
  `
})
export class SiteComponent implements OnInit {

  public currentSite: Site;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.currentSite = {
        id: params['id'],
        name: params['name']
      };
    });


  }

}
