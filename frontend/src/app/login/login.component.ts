import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string | null = null;
  showRole: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loginForm.get('username')?.valueChanges.subscribe(() => {
      this.toggleRoleField();
    });

    this.loginForm.get('password')?.valueChanges.subscribe(() => {
      this.toggleRoleField();
    });
  }

  toggleRoleField(): void {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    this.showRole = !!username && !!password;
    if (!this.showRole) {
      this.loginForm.get('role')?.reset();
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Simulate a successful login
      this.snackBar.open('Login Successful', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
      // Redirect to the homepage
      this.router.navigate(['/home']);
    } else {
      this.error = 'Please fill in all required fields.';
    }
  }
}
