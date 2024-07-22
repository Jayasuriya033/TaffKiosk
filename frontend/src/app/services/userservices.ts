import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/employees`, userData);
  }
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/employees`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/login'; 
  private roleId: number | null = null;

  constructor(private http: HttpClient) {}

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials);
  }

  setRoleId(roleId: number): void {
    this.roleId = roleId;
  }

  getRoleId(): number | null {
    return this.roleId;
  }
}

@Injectable({
  providedIn: 'root'
})export class LogoutService{
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}
  logout(){   
        localStorage.removeItem('token'); 
        this.snackBar.open('Logout Successful', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
        this.router.navigate(['/']); 
  } 

}
@Injectable({
  providedIn: 'root'
}) export class OtpSend{
  private apiUrl = 'http://localhost:3000/otp'; 
  constructor(private http: HttpClient){}
  mNumber(credentials: {mobileNumber:string }) :Observable<any>{
    return this.http.post<any>(this.apiUrl, credentials);
  }

}

@Injectable({
  providedIn:'root'
})export class OtpValidations{
  private apiUrl =  'http://localhost:3000/otp';
  constructor(private http: HttpClient){}
  otp(credentials: {opt:string }) :Observable<any>{
    return this.http.post<any>(this.apiUrl, credentials);
  }
}


@Injectable({
  providedIn : 'root'
}) export class UpdatePassword{
  private apiUrl =  'http://localhost:3000/otp';
  constructor(private http: HttpClient){}
  passwordUpdate(credentials: {opt:string }) :Observable<any>{
    return this.http.put<any>(this.apiUrl, credentials);
  }
}