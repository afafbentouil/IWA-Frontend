import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ListeOffresComponent } from './components/liste-offres/liste-offres.component';
import { ListeCandidaturesComponent } from './components/liste-candidatures/liste-candidatures.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfilCandidatComponent } from './components/profil-candidat/profil-candidat.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    ListeOffresComponent,
    ListeCandidaturesComponent,
    NotFoundComponent,
    ProfilCandidatComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
