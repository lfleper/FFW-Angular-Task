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
  tasks: Task[] = TASKS;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  getTasksForLane(lane: Lane): NgIterable<Task> {
    return Object.values(this.tasks).filter((task) => task.status === lane.status);
  }

  deleteTask(task: Task): void {
    let index = this.tasks.findIndex(t => t.id === task.id);
    this.tasks.splice(index, 1);
  }

  addTask(): void {
    let newTask = {
      id: Date.now(),
      title: "New Task",
      description: "",
      status: 0
    }
    this.tasks.push(newTask);
  }

  editTask(task: Task): void {
    const modalRef = this.modalService.open(EditTaskComponent);
    modalRef.componentInstance.task = cloneDeep(task);
    modalRef.componentInstance.saveRequest.subscribe((result: Task) => {
      //task = result;
      task = { ...result};
    });
  }

}
