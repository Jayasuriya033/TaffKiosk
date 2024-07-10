import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl = 'http://localhost:3000'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/employees`, userData);
  }

}

export class EmployeeService {
  private apiUrl = 'http://localhost:3000'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/employees`);
  }
}