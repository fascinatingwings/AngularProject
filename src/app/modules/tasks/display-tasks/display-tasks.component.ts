import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Tasks } from '../../../model/tasks';

@Component({
  selector: 'app-display-tasks',
  templateUrl: './display-tasks.component.html',
  styleUrls: ['./display-tasks.component.css']
})
export class DisplayTasksComponent implements OnInit {
  private tasksRoute = 'http://localhost:3000/tasks';
  public tasks: Tasks[];

  constructor(private http: HttpClient) { }

  getTasks() {
    this.http.get<Tasks[]>(this.tasksRoute).subscribe(tasks => {
      this.tasks = tasks;
      console.log('Tasks', this.tasks);
    });
  }
  ngOnInit() {
    this.getTasks();
  }
}