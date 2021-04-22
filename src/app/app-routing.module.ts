import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListParquesComponent } from './components/list-parques/list-parques.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { ListVisitantesComponent } from './components/list-visitantes/list-visitantes.component';
import { ListEspeciesComponent } from './components/list-especies/list-especies.component';
import { ListAreasComponent } from './components/list-areas/list-areas.component';
import { ListAlojamientosComponent } from './components/list-alojamientos/list-alojamientos.component';
import { ListAnimalesComponent } from './components/list-animales/list-animales.component';
import { ListMineralesComponent } from './components/list-minerales/list-minerales.component';
import { ListVegetalesComponent } from './components/list-vegetales/list-vegetales.component';
import { ListEmpgestionComponent } from './components/list-empgestion/list-empgestion.component';
import { ListEmpconservacionComponent } from './components/list-empconservacion/list-empconservacion.component';
import { ListEmpinvestigacionComponent } from './components/list-empinvestigacion/list-empinvestigacion.component';
import { ListEmpvigilantesComponent } from './components/list-empvigilantes/list-empvigilantes.component';
import { ListVisitasComponent } from './components/list-visitas/list-visitas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/login',
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
    path:'empleados-conservacion',
    component:ListEmpconservacionComponent
  },
  {
    path:'empleados-gestion',
    component:ListEmpgestionComponent
  },
  {
    path:'empleados-investigacion',
    component:ListEmpinvestigacionComponent
  },
  {
    path:'vigilantes',
    component:ListEmpvigilantesComponent
  },
  {
    path:'visitantes',
    component:ListVisitantesComponent
  },
  {
    path:'servicios',
    component:ListVisitasComponent
  },
  {
    path:'especies',
    component:ListEspeciesComponent
  },
  {
    path:'especie-animal',
    component:ListAnimalesComponent
  },
  {
    path:'especie-mineral',
    component: ListMineralesComponent
  },
  {
    path: 'especie-vegetal',
    component: ListVegetalesComponent

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
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
