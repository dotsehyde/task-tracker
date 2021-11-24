import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../data/Task';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  showTask: boolean;
  subs: Subscription;
  constructor(private taskService: TaskService,private uiService:UiService) {
    this.subs = uiService.getToggle().subscribe(value => this.showTask = value);
  }

  ngOnInit(): void {
    //Get task list from service
    this.taskService.getTask().subscribe((_tasks) => (this.tasks = _tasks));
  }
  //Add New Task
  addTask(task:Task) {
    this.taskService.addTask(task).subscribe((_task)=>this.tasks.push(_task));
  }
  //Update Remainder
  toggleR(task: Task) {
    task.remainder = !task.remainder;
    this.taskService
      .updateRemainder(task)
      .subscribe();
  }
  //Delete Task
  delTask(task: Task) {
    let ans = prompt('Are you sure?(Y/N)');
    ans == 'Y'
      ? this.taskService
          .deleteTask(task.id!)
          .subscribe(
            () => (this.tasks = this.tasks.filter((t) => t.id !== task.id!))
          )
      : alert('No del');
  }
}
