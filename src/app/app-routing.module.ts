import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { AboutComponent } from './composants/about/about.component';
import { PaiementComponent } from './composants/paiement/paiement.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'about', component: AboutComponent },
  { path: 'paiement', component: PaiementComponent },
  { path: 'erreur', component: ErreurComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, //full pour rediriger
  { path: '**', redirectTo: '/erreur' }, //full pour rediriger
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
