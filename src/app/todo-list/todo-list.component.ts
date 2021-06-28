import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskManagerService } from '../services/task-manager.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks: Task[] = []

  constructor(public taskManager: TaskManagerService) {
    this.taskManager.todoSubject.subscribe({
      next: data => (this.tasks = data)
    })
  }

  ngOnInit(): void {
  }

}
