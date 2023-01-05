import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechecheCoursPage } from './recheche-cours.page';

const routes: Routes = [
  {
    path: '',
    component: RechecheCoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechecheCoursPageRoutingModule {}
