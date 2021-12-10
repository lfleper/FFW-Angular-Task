import { Component, NgIterable, NgModuleRef, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LANES } from '../app.component'
import { TASKS, Task, Lane } from '../app.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { cloneDeep } from 'lodash';


@Component({
  selector: 'app-lanes',
  templateUrl: './lanes.component.html',
  styleUrls: ['./lanes.component.css']
})
export class LanesComponent implements OnInit {

  readonly LANES: Lane[] = LANES;
  tasks = TASKS;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  getTasksForLane(lane: Lane): NgIterable<Task> {
    return Object.values(this.tasks).filter((task) => task.status === lane.status);
  }

  deleteTask(task: Task): void {
    delete this.tasks[task.id];
  }

  addTask(): void {
    let newTask = {
      id: Date.now(),
      title: "New Task",
      description: "",
      status: 0
    }
    this.tasks[newTask.id] = newTask;
  }

  editTask(task: Task): void {
    const modalRef = this.modalService.open(EditTaskComponent);
    modalRef.componentInstance.task = cloneDeep(task);
    modalRef.componentInstance.saveRequest.subscribe((result: Task) => {
      console.log("Task: %o", result);
      //task = result;
      this.tasks[result.id] = result;
    });
  }

}
