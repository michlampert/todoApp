import { Component, OnInit } from '@angular/core';
import { TaskManagerService } from '../services/task-manager.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  name: string = ""

  constructor(public taskManager: TaskManagerService) { }

  ngOnInit(): void {
  }

  add(){
    this.taskManager.addTask({
      name: this.name,
      isDone: false,
    })
    this.name = ""
  }
}
