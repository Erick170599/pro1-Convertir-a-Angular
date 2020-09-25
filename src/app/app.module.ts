import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    ButtonsComponent,
    CardsComponent,
    ColorsComponent,
    BordersComponent,
    AnimationsComponent,
    OtherComponent,
    PageComponent,
    BlankComponent,
    ChartsComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
