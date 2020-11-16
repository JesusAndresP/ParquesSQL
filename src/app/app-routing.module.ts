import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListParquesComponent } from './components/list-parques/list-parques.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { ListVisitantesComponent } from './components/list-visitantes/list-visitantes.component';
import { ListEspeciesComponent } from './components/list-especies/list-especies.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/login',
    pathMatch: 'full',
  },
  {
    path:'parques',
    component:ListParquesComponent
  },
  {
    path:'empleados',
    component:ListEmpleadosComponent
  },
  {
    path:'visitantes',
    component:ListVisitantesComponent
  },
  {
    path:'especies',
    component:ListEspeciesComponent
  },
  { 
    path: 'home', 
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
