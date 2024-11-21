import { Component, inject } from '@angular/core';
import { Task } from '../../task.model';
import { DatePipe } from '@angular/common';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  
  tasks: Task[];

  private taskService = inject(TaskService);

  
  constructor () {
    this.tasks =  this.taskService.getTasks();
  }

  handleCheckbox(id: number) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    const updateTask = this.tasks[taskIndex];
    updateTask.completed = !updateTask.completed;
    this.tasks = this.taskService.updateTask(updateTask);
  }

  deleteTask(id: number) {
    this.tasks = this.taskService.deleteTask(id);
  } 

}
