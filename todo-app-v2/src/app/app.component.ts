import { Component, OnInit } from '@angular/core';
import { TodoListComponent } from './core/todo/todo-list/todo-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // standalone: true,
  // imports: [
  //   TodoListComponent
  // ]
  
})
export class AppComponent implements OnInit {
  title = 'todo-app';

  constructor(private route: Router){}

  ngOnInit(): void {
    if(!localStorage.getItem("access_token")){
      this.route.navigateByUrl('login');
    }
  }
}
