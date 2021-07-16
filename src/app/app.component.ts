import { Component } from '@angular/core';
import { IToDoTask } from './to-do-task/IToDoTask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'planner';
  toDoTasks: IToDoTask[] = [];
  constructor() {
    this.toDoTasks = [
      {
        id: 1,
        title: 'Task 1',
        done: true
      },
      {
        id: 2,
        title: 'Task 2',
        done: false
      }
    ]
  }
}
