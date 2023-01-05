import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfesseursPage } from './professeurs.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProfesseursPageRoutingModule } from './professeurs-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProfesseursPageRoutingModule
  ],
  declarations: [ProfesseursPage]
})
export class ProfesseursPageModule {}
