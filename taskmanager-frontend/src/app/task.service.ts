import { Injectable } from '@angular/core';
import { Task } from './task.model';



@Injectable({
  providedIn: 'root',
})
export class TaskService {

  constructor() { }

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

  // getTask
  getTasks() {
    return this.tasks;
  }
  
  // addTask
  addTask(task:Task) {
    this.tasks.push(task) 
  }

  // updateTask
  updateTask(newTask:Task) {
    const taskIndex = this.tasks.findIndex(task=>task.id === newTask.id);
    this.tasks[taskIndex] = newTask;
    return this.tasks;
  }

  // deleteTask
  deleteTask(id: number) {
    const taskIndex = this.tasks.findIndex(task=>task.id === id);
    this.tasks.splice(taskIndex, 1);
    return this.tasks;
  }
}
