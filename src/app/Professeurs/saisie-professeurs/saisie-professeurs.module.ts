import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaisieProfesseursPageRoutingModule } from './saisie-professeurs-routing.module';

import { SaisieProfesseursPage } from './saisie-professeurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaisieProfesseursPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SaisieProfesseursPage]
})
export class SaisieProfesseursPageModule {}
