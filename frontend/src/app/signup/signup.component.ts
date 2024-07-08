// signup.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  maxDate = new Date(); // Set maximum date for the date picker

  countryCodes = [
    { code: '+91', country: 'India' },
    { code: '+1', country: 'USA' },
    { code: '+44', country: 'UK' },
    { code: '+62', country: 'Indonesia' },
    // Add more country codes as needed
  ];

  constructor(private fb: FormBuilder, private router: Router) { // Inject Router
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      location: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      // Handle form submission logic
      
      // Navigate to the submit-form route after successful form submission
      this.router.navigate(['/submit-form']);
    }
  }
}
