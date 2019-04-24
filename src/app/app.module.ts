import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SettingComponent } from './setting/setting.component';
import { ListeEmploiComponent } from './emploi/liste-emploi/liste-emploi.component';
import { AjouterEmploiComponent } from './emploi/ajouter-emploi/ajouter-emploi.component';

const appRoutes: Routes= [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: SettingComponent },
  { path: 'liste-emploi', component: ListeEmploiComponent },  
  { path: 'ajouter-emploi', component: AjouterEmploiComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    SettingComponent,
    ListeEmploiComponent,
    AjouterEmploiComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
