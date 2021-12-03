import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../app.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  task!: Task;


  @Output()
  deleteRequest = new EventEmitter<Task>();

  @Output()
  editRequest = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(): void {
    this.deleteRequest.emit(this.task);
  }

  edit(): void {
    this.editRequest.emit(this.task);
  }

}
