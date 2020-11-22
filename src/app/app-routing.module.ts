import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListParquesComponent } from './components/list-parques/list-parques.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { ListVisitantesComponent } from './components/list-visitantes/list-visitantes.component';
import { ListEspeciesComponent } from './components/list-especies/list-especies.component';
import { ListAreasComponent } from './components/list-areas/list-areas.component';
import { ListAlojamientosComponent } from './components/list-alojamientos/list-alojamientos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full',
  },
  
  {
    path: 'areas', 
    component: ListAreasComponent
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
    path:'alojamientos',
    component: ListAlojamientosComponent
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
