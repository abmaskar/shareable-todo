import { HttpClient, HttpHeaders } from "@angular/common/http";
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
        let headers = new HttpHeaders();
        headers = headers.append('Authentication', `${localStorage.getItem("access_token")}`);
        return this.http.get(`${this.baseUrl}/todo/owner/${owner}`, {headers: headers});
    }

    createTodo(todo){
        let headers = new HttpHeaders();
        headers = headers.append('Authentication', `${localStorage.getItem("access_token")}`);
        return this.http.post(`${this.baseUrl}/todo`,todo,  {headers: headers});
    }

    updateTodo(todo){
        let headers = new HttpHeaders();
        headers = headers.append('Authentication', `${localStorage.getItem("access_token")}`);
        return this.http.post(`${this.baseUrl}/todo/update`,todo, {headers: headers});
    }

    deleteTodo(id){
        let headers = new HttpHeaders();
        headers = headers.append('Authentication', `${localStorage.getItem("access_token")}`);
        return this.http.delete(`${this.baseUrl}/todo/${id}`, {headers: headers});
    }
  }