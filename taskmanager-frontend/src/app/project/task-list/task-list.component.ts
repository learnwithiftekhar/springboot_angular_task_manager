import { Component } from '@angular/core';
import { Task } from '../../task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [DatePipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [
    {
      id: 1,
      name: "Design Wireframe", 
      description: "",
      completed: false,
      dueDate: new Date("2024-07-31"), 
      project: 1
    },
    {
      id: 2,
      name: "Develop Frontend", 
      description: "",
      completed: true,
      dueDate: new Date("2024-07-28"), 
      project: 1
    },
    {
      id: 3,
      name: "Implement backend", 
      description: "",
      completed: false,
      dueDate: new Date("2024-11-28"), 
      project: 1
    }
  ];
  
  handleCheckbox(id: number) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    this.tasks[taskIndex].completed = !this.tasks[taskIndex].completed;
  }

}
