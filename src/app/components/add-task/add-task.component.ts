import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/data/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Output() addNewTask: EventEmitter<Task> = new EventEmitter();

  text: string;
  day: string;
  remainder: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  addTask() {
    if (!this.text) {
      alert("Please enter a task title")
      return;
    }
    const newTask:Task = {
      text: this.text,
      day: this.day,
      remainder: this.remainder,
    };
    this.addNewTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.remainder = false;
  }
}
