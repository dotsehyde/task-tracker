import { Component, OnInit ,Input,EventEmitter, Output} from '@angular/core';
import { Task } from '../../data/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDelete: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleR: EventEmitter<Task> = new EventEmitter();
  delIcon = faTimes;

  constructor(private taskService:TaskService) {
  }

  ngOnInit(): void {
  }

  deleteTask() {
    this.onDelete.emit();
  }
  rToggle(task: Task) {
    this.onToggleR.emit(task);
  }
}
