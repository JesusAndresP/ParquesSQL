import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListParquesComponent } from './components/list-parques/list-parques.component';

const routes: Routes = [
  {
    path:'parques',
    component:ListParquesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
