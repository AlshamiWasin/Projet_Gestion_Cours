import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechecheCoursPageRoutingModule } from './recheche-cours-routing.module';

import { RechecheCoursPage } from './recheche-cours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechecheCoursPageRoutingModule
  ],
  declarations: [RechecheCoursPage]
})
export class RechecheCoursPageModule {}
