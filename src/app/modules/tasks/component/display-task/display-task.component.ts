import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Task } from '../../../../model/task';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})
export class DisplayTaskComponent implements OnInit {
  @Input() task: Task;
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onClickDelete() {
    this.taskDeleted.emit(this.task.taskId);
  }
}