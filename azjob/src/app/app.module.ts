import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ListeOffresComponent } from './components/liste-offres/liste-offres.component';
import { ListeCandidaturesComponent } from './components/liste-candidatures/liste-candidatures.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    ListeOffresComponent,
    ListeCandidaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
