import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TasksModule } from './modules/tasks/tasks.module';
import { TasksCreateComponent } from './modules/tasks/component/tasks-create/tasks-create.component';

@NgModule({
  declarations: [AppComponent, TasksCreateComponent],
  imports: [BrowserModule, AppRoutingModule, TasksModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
