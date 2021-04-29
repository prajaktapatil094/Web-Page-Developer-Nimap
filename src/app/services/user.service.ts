import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
@Injectable()
export class UserService {
    endpoint:string="http://localhost:3000/user";
    headers= new HttpHeaders().set("Content-Type","application/json");
    constructor(private http: HttpClient) { }

    
    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.apiUrl}/user.json/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/user/` + id);
    }
}