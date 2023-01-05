import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaisieProfesseursPage } from './saisie-professeurs.page';

const routes: Routes = [
  {
    path: '',
    component: SaisieProfesseursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaisieProfesseursPageRoutingModule {}
