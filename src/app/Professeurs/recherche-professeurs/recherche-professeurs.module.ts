import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheProfesseursPageRoutingModule } from './recherche-professeurs-routing.module';

import { RechercheProfesseursPage } from './recherche-professeurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheProfesseursPageRoutingModule
  ],
  declarations: [RechercheProfesseursPage]
})
export class RechercheProfesseursPageModule {}
