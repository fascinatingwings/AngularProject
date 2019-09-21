import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayTasksComponent } from './display-tasks/display-tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayTaskComponent } from './component/display-task/display-task.component';
import { TasksCreateComponent } from './component/tasks-create/tasks-create.component';
import { TasksReadComponent } from './component/tasks-read/tasks-read.component';
import { TasksEditComponent } from './component/tasks-edit/tasks-edit.component';
import { TasksDeleteComponent } from './component/tasks-delete/tasks-delete.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [DisplayTasksComponent, DisplayTaskComponent, TasksCreateComponent, TasksReadComponent, TasksEditComponent, TasksDeleteComponent],
  exports: [DisplayTasksComponent]
})
export class TasksModule { }
