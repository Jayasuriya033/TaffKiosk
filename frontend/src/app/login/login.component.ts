import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/userservices';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string | null = null;
  showRole: boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private userService : UserService,

  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // this.loginForm.get('username')?.valueChanges.subscribe(() => {
    //   this.toggleRoleField();
    // });

    // this.loginForm.get('password')?.valueChanges.subscribe(() => {
    //   this.toggleRoleField();
    // });
  }

  // toggleRoleField(): void {
  //   const username = this.loginForm.get('username')?.value;
  //   const password = this.loginForm.get('password')?.value;
  //   this.showRole = !!username && !!password;
  //   if (!this.showRole) {
  //     this.loginForm.get('role')?.reset();
  //   }
  // }

  onSubmit(): void {
    if (this.loginForm.valid) {

      this.userService.registerUser(this.loginForm.value).subscribe(
        (response: any) => {
          this.snackBar.open('Login Successful', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['success-snackbar']
          });
          this.router.navigate(['/home'])
        },
       (error: any) => {
        this.snackBar.open('Login Failed!. Invalid Username or Password', 'Close', {
          duration: 3000, // duration in milliseconds
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: ['error-snackbar']
        });
      }
      );} 

 else {
      this.error = 'Please fill in all required fields.';
    }
  }
}
