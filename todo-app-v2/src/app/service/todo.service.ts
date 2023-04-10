import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
   })
export class TodoService {
    title = 'todo-app';

    private baseUrl='http://localhost:8080'
    constructor(private http: HttpClient){

    }

    getAllTodoByOwner(owner){
        return this.http.get(`${this.baseUrl}/todo/owner/${owner}`);
    }

    createTodo(todo){
        return this.http.post(`${this.baseUrl}/todo`,todo);
    }

    updateTodo(todo){
        return this.http.post(`${this.baseUrl}/todo/update`,todo);
    }

    deleteTodo(id){
        return this.http.delete(`${this.baseUrl}/todo/${id}`);
    }
  }