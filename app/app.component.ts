import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashBoardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService, ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/heroes', name: 'Heroes', component: HeroesComponent },
    { path: '/dashboard', name: 'Dashboard', component: DashBoardComponent, useAsDefault: true },
    { path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent }
])
export class AppComponent {
    title = 'Tour of Heroes';
}