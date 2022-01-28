import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/header',
    pathMatch: 'full'
  },
  {
    path: 'header', 
    loadChildren: () => import('./modules/header/header.module').then(m => m.HeaderModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
