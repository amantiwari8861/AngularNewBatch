import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../test-fake-api/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements OnInit
{
  baseUrl="http://localhost:3000/users";
  constructor(private http:HttpClient) { }
  
  ngOnInit(): void 
  {
    this.getUsers()
  }
  getUsers():Observable<user[]>
  {
    return this.http.get<user[]>(this.baseUrl);
  }
}
