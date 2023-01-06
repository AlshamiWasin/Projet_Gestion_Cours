import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {ProfesseursPageModule} from "../Professeurs/professeurs.module";
import {IsAuthenticatedGuard} from "../guards/is-authenticated.guard";

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [
      IsAuthenticatedGuard
    ],
    children: [
      {
        path: 'Cours',
        loadChildren: () => import('../Cours/cours.module').then(m => m.CoursPageModule)
      },
      {
        path: 'Professeurs',
        loadChildren: () => import('../Professeurs/professeurs.module').then(m => m.ProfesseursPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/Cours',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Cours',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
