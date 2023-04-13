import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
   })
export class AuthServiceService {
    title = 'todo-app';

    private baseUrl='http://localhost:8080'
    constructor(private http: HttpClient){

    }

    login(body){
        return this.http.post(this.baseUrl + '/api/auth/signin', body);
    }

    register(body){
        return this.http.post(this.baseUrl + '/api/auth/signup', body);
    }
}