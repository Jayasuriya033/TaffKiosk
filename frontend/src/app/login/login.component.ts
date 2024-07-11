// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginForm: FormGroup;
//   error: string | null = null;
//   showRole: boolean = false;

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private snackBar: MatSnackBar
//   ) {
//     this.loginForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required],
//       role: ['', Validators.required]
//     });
//   }

//   ngOnInit(): void {
//     this.loginForm.get('username')?.valueChanges.subscribe(() => {
//       this.toggleRoleField();
//     });

//     this.loginForm.get('password')?.valueChanges.subscribe(() => {
//       this.toggleRoleField();
//     });
//   }

//   toggleRoleField(): void {
//     const username = this.loginForm.get('username')?.value;
//     const password = this.loginForm.get('password')?.value;
//     this.showRole = !!username && !!password;
//     if (!this.showRole) {
//       this.loginForm.get('role')?.reset();
//     }
//   }

//   onSubmit(): void {
//     if (this.loginForm.valid) {
//       // Simulate a successful login
//       this.snackBar.open('Login Successful', 'Close', {
//         duration: 3000,
//         verticalPosition: 'top',
//         horizontalPosition: 'center'
//       });
//       // Redirect to the homepage
//       this.router.navigate(['/home']);
//     } else {
//       this.error = 'Please fill in all required fields.';
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/userservices';
>>>>>>> 8f9f49e557742ff18cccf0ee8f6eb6025e9a0cc5

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string | null = null;
  showRole: boolean = true;

<<<<<<< HEAD
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
=======
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private userService : UserService,

  ) {
>>>>>>> 8f9f49e557742ff18cccf0ee8f6eb6025e9a0cc5
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {
<<<<<<< HEAD
    // Optionally initialize any logic here
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const loginData = this.loginForm.value;
    
    this.http.post<any>('http://localhost:3000/login', loginData)
      .subscribe(
        response => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.error = 'Invalid username or password';
          console.error('Error logging in:', error);
        }
      );
=======
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
>>>>>>> 8f9f49e557742ff18cccf0ee8f6eb6025e9a0cc5
  }
}
