import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
// import { Component } from '@angular/core';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css'], // Changed 'styleUrl' to 'styleUrls'
})
export class SubmitFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { // Inject the Router here
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator // Corrected 'Validators' to 'validator'
    });
  }

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { confirmPassword: "error" };
    } else {
      return null;
    }
  }

  onSubmit() { // Changed method name to onSubmit
    if (this.form.valid) {
      console.log(this.form.value);
      this.router.navigate(['/home']); // Navigate to the desired route
    }
  }
}
