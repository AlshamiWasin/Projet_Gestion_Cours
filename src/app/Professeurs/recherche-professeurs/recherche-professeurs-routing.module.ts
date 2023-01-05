import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheProfesseursPage } from './recherche-professeurs.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheProfesseursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheProfesseursPageRoutingModule {}
