import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TodoService } from 'src/app/service/todo.service';
import {MatSelectModule} from '@angular/material/select'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, MatButtonModule, MatSelectModule, MatCheckboxModule]
}
)
export class TodoComponent {
  title = 'todo-app';
  @Input() public todo;
  @Output() public action = new EventEmitter();
  public editMode = false;
  public task;
  public priority;

  constructor(private todoService: TodoService) {

  }


  onEdit() {
    this.editMode = true;
    this.task = this.todo.title;
    this.priority = this.todo.priority;
    console.log(this.todo);
  }

  onUpdate() {
    if (this.editMode) {
      this.todo.title = this.task;
      this.todo.priority = this.priority;
      console.log(this.todo);

      this.todoService.updateTodo(this.todo).subscribe(res => {
        console.log(res);
        this.editMode = false;
        this.action.emit("update");
      }, err => {
        console.log(err);
      });
    } else {
      this.todo.status = 'close';
      this.todoService.updateTodo(this.todo).subscribe(res => {
        console.log(res);
        this.action.emit("close");
      }, err => {
        console.log(err);
      });
    }
  }

  onDelete() {
    this.todoService.deleteTodo(this.todo._id).subscribe(res => {
      console.log(res);
      this.editMode = false;
      this.action.emit("delete");
    }, err => {
      console.log(err);
    })
  }

  onClose(){
    this.todo.status = 'close';
    console.log(this.todo);

    this.todoService.updateTodo(this.todo).subscribe(res => {
      console.log(res);
      this.editMode = false;
      this.action.emit("close");
    }, err => {
      console.log(err);
    });
  }
}
