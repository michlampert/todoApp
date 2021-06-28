import { Component, OnInit } from '@angular/core';
import { TaskManagerService } from '../services/task-manager.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {

  tasks: Task[] = []

  constructor(public taskManager: TaskManagerService) {
    this.taskManager.doneSubject.subscribe({
      next: data => (this.tasks = data)
    })
  }

  ngOnInit(): void {
  }

}
