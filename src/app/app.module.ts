import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { ServeComponent } from './composants/serve/serve.component';
import { PaiementComponent } from './composants/paiement/paiement.component';
import { AboutComponent } from './composants/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ErreurComponent,
    ServeComponent,
    PaiementComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
