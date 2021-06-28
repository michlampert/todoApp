import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  taskList: Task[] = [
    {name: "task1", isDone: false},
    {name: "task2", isDone: false},
    {name: "task3", isDone: false},
    {name: "task4", isDone: false},
    {name: "task5", isDone: false}
  ]

  taskSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([])
  todoSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([])
  doneSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([])

  constructor() {
    this.update()
  }

  addTask(task: Task){
    this.taskList.push(task)
    this.update()
  }

  doneTask(task: Task){
    this.taskList = this.taskList.filter(t => t != task)
    task.isDone = true
    task.endDate = (new Date()).toLocaleDateString()
    this.taskList.push(task)
    this.update()
  }

  removeTask(task: Task){
    this.taskList = this.taskList.filter(t => t != task)
    this.update()
  }

  update(){
    this.taskSubject.next(this.taskList)
    this.todoSubject.next(this.taskList.filter(t => !t.isDone))
    this.doneSubject.next(this.taskList.filter(t => t.isDone))
  }
}
