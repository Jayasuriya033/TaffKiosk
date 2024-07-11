import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/userservices'; // Adjust path as per your project structure
// import 'node_modules/intl-tel-input/build/css/intlTelInput.css';
// import 'intl-tel-input/build/css/intlTelInput.css';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  maxDate = new Date(); // Set maximum date for the date picker

  countryCodes = [
    { country: 'India', code: '+91' },
    { country: 'UK', code: '+44' },
    { country: 'Korea', code: '+784' },
    // Add more country codes as needed
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService // Inject UserService
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['', Validators.required],
      phoneNo: ['', Validators.required], // Ensure phoneNo is added
      location: ['', Validators.required],
      role: ['', Validators.required],
      createdBy: ['Self-creating'],
      roleId: [1],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.userService.registerUser(this.signupForm.value).subscribe(
        response => {
          console.log('User registered successfully', response);
          // Navigate to the submit-form route after successful form submission
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error registering user', error);
        }
      );
    }
  }
}
