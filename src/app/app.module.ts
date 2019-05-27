import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SettingComponent } from './setting/setting.component';
import { ListeEmploiComponent } from './emploi/liste-emploi/liste-emploi.component';
import { AjouterEmploiComponent } from './emploi/ajouter-emploi/ajouter-emploi.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { GuideComponent } from './guide/guide.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

const appRoutes: Routes= [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: DashboardComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'liste-emploi', component: ListeEmploiComponent },  
  { path: 'ajouter-emploi', component: AjouterEmploiComponent }, 
  { path: 'plateforme-recrutement', component: RecrutementComponent },  
  { path: 'guide', component: GuideComponent }  
   
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    SettingComponent,
    ListeEmploiComponent,
    AjouterEmploiComponent,
    DashboardComponent,
    RecrutementComponent,
    GuideComponent
  ],
  imports: [
    DragDropModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'app-liste-emploi'), 
// imports firebase/app needed for everything
    AngularFirestoreModule, 
// imports firebase/firestore, only needed for database features
    AngularFireAuthModule, 
// imports firebase/auth, only needed for auth features,
    AngularFireStorageModule 
// imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
