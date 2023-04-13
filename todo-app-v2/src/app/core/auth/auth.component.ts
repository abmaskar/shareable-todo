import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from 'src/app/service/todo.service';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import { AuthServiceService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule,
    MatButtonModule, MatIconModule, MatTabsModule
  ]
})
export class AuthComponent implements OnInit {
  title = 'todo-app';
  public isLogin = true;

  public email;
  public password;
  public name;

  constructor(private authService: AuthServiceService,
    private route: Router) {

  }

  ngOnInit(): void {
  }

  onLogin(){
    this.authService.login({email: this.email, password: this.password}).subscribe(res => {
      console.log(res);
      console.log(res['responseCookie']);
      console.log(res['responseCookie']['value']);

      localStorage.setItem("access_token", res['responseCookie']['value']);
      localStorage.setItem("email", this.email);
      this.route.navigateByUrl('');

    }, err => {
      console.log(err);
    });
  }

  onRegister(){
    this.authService.register({username: this.email, email: this.email, password: this.password, roles: ['ROLE_USER']}).subscribe(res => {
    }, err => {
      console.log(err);
    });
  }

}
