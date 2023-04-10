import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, MatButtonModule]
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
  }

  onUpdate() {
    if (this.editMode) {
      this.todo = this.task;
      this.priority = this.priority;
      this.todoService.updateTodo(this.todo).subscribe(res => {
        console.log(res);
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
    this.todoService.deleteTodo(this.todo.id).subscribe(res => {
      console.log(res);
      this.action.emit("delete");
    }, err => {
      console.log(err);
    })
  }
}
