import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sunil',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }


  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);

      // Perform login logic here, e.g., send the form data to the server
      
      
      // Redirect to the desired page after successful login
      this.router.navigate(['/home']); // or another route
    }
  }

}
