import { Component } from '@angular/core';
import { LanesComponent } from './lanes/lanes.component';

export type Lane = {
    id: string,
    icon: string,
    status: number,
    title: string,
    description: string
}

export const LANES: Lane[] = [
  {
  id: "lane1",
  icon: "list",
  status: 0,
  title: "To Do",
  description: "All tasks you need to do",
  },
  {
  id: "lane2",
  icon: "hourglass-start",
  status: 1,
  title: "In Progress",
  description: "All tasks currently in progress",
  },
  {
  id: "lane3",
  icon: "check-circle",
  status: 2,
  title: "Done",
  description: "All completed tasks",
  },
];

export type Task = {
  id: number,
  title: string,
  description: string,
  status: number
}

export var TASKS: Task[] = [
  {
  id: 1,
  title: "Learn JavaScript",
  description: "read a book on Javascript",
  status: 0,
  },
  {
  id: 2,
  title: "Learn Vue",
  description: "read a book on Vue",
  status: 1,
  },
  {
  id: 3,
  title: "Build something awesome",
  description: "Get an idea",
  status: 0,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
