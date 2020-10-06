import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListParquesComponent } from './components/list-parques/list-parques.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { ListVisitantesComponent } from './components/list-visitantes/list-visitantes.component';
import { ListEspeciesComponent } from './components/list-especies/list-especies.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
