import { Component, Input } from "@angular/core";
import { IToDoTask } from "./IToDoTask";

@Component({
    selector: 'app-to-do-task',
    templateUrl: './to-do-task.component.html',
    styleUrls: ['./to-do-task.component.scss']
})
export class ToDoTaskComponent {
    @Input() toDoTask: IToDoTask | undefined;
}
