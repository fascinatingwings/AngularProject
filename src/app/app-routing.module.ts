import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DisplayTasksComponent } from './modules/tasks/display-tasks/display-tasks.component';

const routes: Routes = [
  {
    path: 'sweep',
    component: DisplayTasksComponent
  },
  {
    path: 'dishes',
    component: DisplayTasksComponent
  },
  {
    path: 'read',
    component: DisplayTasksComponent
  },
  {
    path: 'code',
    component: DisplayTasksComponent
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: DisplayTasksComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
