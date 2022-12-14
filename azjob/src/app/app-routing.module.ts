import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeCandidaturesComponent } from './components/liste-candidatures/liste-candidatures.component';
import { ListeOffresComponent } from './components/liste-offres/liste-offres.component';
import { LoginComponent } from './components/login/login.component';
import { ProfilCandidatComponent } from './components/profil-candidat/profil-candidat.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'user', component: UserComponent },
  { path: 'offres', component: ListeOffresComponent },
  { path: 'profil', component: ProfilCandidatComponent }
  //{ path: '/candidatures', component: ListeCandidaturesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
