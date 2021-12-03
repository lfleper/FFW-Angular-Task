import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Task } from '../app.component';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  @Input()
  task!: Task;

  @Output()
  saveRequest = new EventEmitter<Task>();

  editTaskForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
  });


  constructor(public activeModal: NgbActiveModal) { }


  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("submit");
    //this.saveRequest.emit(this.task);
    this.activeModal.close(this.task);
  }

}
