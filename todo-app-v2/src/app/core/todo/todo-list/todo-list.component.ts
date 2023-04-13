import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from 'src/app/service/todo.service';
import { TodoComponent } from '../todo/todo.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, TodoComponent,
    MatButtonModule, MatIconModule
  ]
})
export class TodoListComponent implements OnInit {
  title = 'todo-app';
  public task;
  public todos = [{
    title: "test",
    owner: "a",
    priority: "low",
    editMode: false,

  }];


  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    this.getAllTodoByOwner();
  }

  getAllTodoByOwner() {
    this.todoService.getAllTodoByOwner(localStorage.getItem("email")).subscribe((res: any[any]) => {
      this.todos = res.map(item => {
        return {
          _id: item['_id'],
          title: item['title'],
          owner: item['owner'],
          priority: item['priority'],
          editMode: false,
        }
      });
    }, err => {
      console.log(err);
    })
  }

  onCreate() {
    if (this.task) {
      this.todoService.createTodo({
        "title": this.task,
        "owner": localStorage.getItem("email"),
        "status": "open",
        "priority": "low"
      }).subscribe(res => {
        console.log(res)
        this.getAllTodoByOwner();
        this.task = null;
      }, (err) => {
        console.log(err)
      });
    }
  }

  onActionEvent(event, index){
    console.log(event);
    console.log(index);
    if(event ==='update' || event ==='delete'){
      this.getAllTodoByOwner();
    } 
  }
}
