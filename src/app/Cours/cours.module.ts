import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursPage } from './cours.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CoursPageRoutingModule } from './cours-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CoursPageRoutingModule
  ],
  declarations: [CoursPage]
})
export class CoursPageModule {}

