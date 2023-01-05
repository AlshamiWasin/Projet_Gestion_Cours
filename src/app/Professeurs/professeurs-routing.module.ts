import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesseursPage } from './professeurs.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesseursPage,
  },
  {
    path: 'saisie-professeurs',
    loadChildren: () => import('../Professeurs/saisie-professeurs/saisie-professeurs.module').then( m => m.SaisieProfesseursPageModule)
  },
  {
    path: 'recherche-professeurs',
    loadChildren: () => import('../Professeurs/recherche-professeurs/recherche-professeurs.module').then( m => m.RechercheProfesseursPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesseursPageRoutingModule {}
