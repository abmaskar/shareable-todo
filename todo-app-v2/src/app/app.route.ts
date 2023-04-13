import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',loadComponent: () => import('./core/todo/todo-list/todo-list.component').then(m => m.TodoListComponent) },
  { path: 'login',loadComponent: () => import('./core/auth/auth.component').then(m => m.AuthComponent), pathMatch: 'full'  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }