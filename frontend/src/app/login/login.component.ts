import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sunil',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showRole: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });

    // Subscribe to value changes of username and password fields
    this.loginForm.get('username')?.valueChanges.subscribe(() => {
      this.updateRoleVisibility();
    });
    this.loginForm.get('password')?.valueChanges.subscribe(() => {
      this.updateRoleVisibility();
    });
  }

  updateRoleVisibility(): void {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    this.showRole = !!username && !!password; // Show role if both fields have data
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);

      // Perform login logic here, e.g., send the form data to the server
      
      // Redirect to the desired page after successful login
      this.router.navigate(['/signup']); // or another route
    }
  }
}
