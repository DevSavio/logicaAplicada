import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercicio1ListComponent } from './pages/exercicio1/exercicio1-list.component';
import { Exercicio2Component } from './pages/exercicio2/exercicio2.component';
import { Exercicio3Component } from './pages/exercicio3/exercicio3.component';
import { Exercicio4Component } from './pages/exercicio4/exercicio4.component';
import { Exercicio5Component } from './pages/exercicio5/exercicio5.component';
import { Exercicio6Component } from './pages/exercicio6/exercicio6.component';
const routes: Routes = [
  {
    path: 'exercicio1',
    component: Exercicio1ListComponent,
  },
  {
    path: 'exercicio2',
    component: Exercicio2Component,
  },
  {
    path: 'exercicio3',
    component: Exercicio3Component,
  },
  {
    path: 'exercicio4',
    component: Exercicio4Component,
  },
  {
    path: 'exercicio5',
    component: Exercicio5Component,
  },
  {
    path: 'exercicio6',
    component: Exercicio6Component,
  },
  // {
  //   path: 'exercicio7',
  //   loadChildren: () =>
  //     import('').then((m) => ),
  // },
  // {
  //   path: 'exercicio8',
  //   loadChildren: () =>
  //     import('').then((m) => ),
  // },
  // {
  //   path: 'exercicio9',
  //   loadChildren: () =>
  //     import('').then((m) => ),
  // },
  // {
  //   path: 'exercicio10',
  //   loadChildren: () =>
  //     import('').then((m) => ),
  // },
  // {
  //   path: 'exercicio11',
  //   loadChildren: () =>
  //     import('').then((m) => ),
  // },
  // {
  //   path: 'exercicio12',
  //   loadChildren: () =>
  //     import('').then((m) => ),
  // },
  // {
  //   path: 'exercicio13',
  //   loadChildren: () =>
  //     import('').then((m) => ),
  // },
  // {
  //   path: 'exercicio14',
  //   loadChildren: () =>
  //     import('').then((m) => ),
  // },
  // {
  //   path: 'exercicio15',
  //   loadChildren: () =>
  //     import('').then((m) => ),
  // },
  // {
  //   path: 'exercicio16',
  //   loadChildren: () =>
  //     import('').then((m) => ),
  // },
  // {
  //   path: 'exercicio17',
  //   loadChildren: () =>
  //     import('').then((m) => ),
  // },
  // {
  //   path: 'exercicio18',
  //   loadChildren: () =>
  //     import('').then((m) => ),
  // },
  // {
  //   path: 'exercicio19',
  //   loadChildren: () =>
  //     import('').then((m) => ),
  // },
  // {
  //   path: 'exercicio20',
  //   loadChildren: () =>
  //     import('').then((m) => ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
