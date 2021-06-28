import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskManagerService } from '../services/task-manager.service'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task = {name: "", isDone: false}

  constructor(public taskManager: TaskManagerService) { }

  ngOnInit(): void {
  }

  done(){
    this.taskManager.doneTask(this.task)
  }

  remove(){
    this.taskManager.removeTask(this.task)
  }

}
