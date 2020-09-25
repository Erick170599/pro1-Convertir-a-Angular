import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/containers/home/dashboard/dashboard.component';
import { ButtonsComponent } from './components/containers/buttons/buttons.component';
import { CardsComponent } from './components/containers/cards/cards.component';
import { ColorsComponent } from './components/containers/colors/colors.component';
import { BordersComponent } from './components/containers/borders/borders.component';
import { AnimationsComponent } from './components/containers/animations/animations.component';
import { OtherComponent } from './components/containers/other/other.component';
import { PageComponent } from './components/containers/page/page.component';
import { BlankComponent } from './components/containers/blank/blank.component';
import { ChartsComponent } from './components/containers/charts/charts.component';
import { TablesComponent } from './components/containers/tables/tables.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: DashboardComponent },
    { path: 'buttons', component: ButtonsComponent},
    { path: 'cards', component: CardsComponent},
    { path: 'colors', component: ColorsComponent},
    { path: 'borders', component: BordersComponent},
    { path: 'animations', component: AnimationsComponent},
    { path: 'other', component: OtherComponent},
    { path: 'page', component: PageComponent},
    { path: 'blank', component: BlankComponent},
    { path: 'charts', component: ChartsComponent},
    { path: 'tables', component: TablesComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);