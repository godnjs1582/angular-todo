import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist.component';

const routes: Routes = [
  {path:'',component:TodolistComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
