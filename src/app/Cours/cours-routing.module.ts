import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursPage } from './cours.page';

const routes: Routes = [
  {
    path: '',
    component: CoursPage,
  },
  {
    path: 'saisie-cours',
    loadChildren: () => import('../Cours/saisie-cours/saisie-cours.module').then( m => m.SaisieCoursPageModule)
  },
  {
    path: 'recheche-cours',
    loadChildren: () => import('../Cours/recheche-cours/recheche-cours.module').then( m => m.RechecheCoursPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursPageRoutingModule {}
