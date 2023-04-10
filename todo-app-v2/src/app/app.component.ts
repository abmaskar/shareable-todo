import { Component } from '@angular/core';
import { TodoListComponent } from './core/todo/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // standalone: true,
  // imports: [
  //   TodoListComponent
  // ]
  
})
export class AppComponent {
  title = 'todo-app';
}
