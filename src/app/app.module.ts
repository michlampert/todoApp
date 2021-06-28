import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskComponent } from './task/task.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DoneListComponent } from './done-list/done-list.component';
import { TaskManagerService } from './services/task-manager.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AddTaskComponent,
    TaskComponent,
    TodoListComponent,
    DoneListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TaskManagerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
