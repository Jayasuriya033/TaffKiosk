import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mobileNumber: string = '';
  otp: string[] = ['', '', '', '']; // Array to hold OTP digits
  otpSent: boolean = false;

  sendOTP() {
    // Simulate sending OTP logic
    this.otpSent = true;
  }

  onSubmit() {
    // Handle form submission, e.g., verify OTP
    const enteredOTP = this.otp.join(''); // Join array elements to form OTP
    console.log('Submitting OTP: ', enteredOTP);
  }

  otpInputHandler(event: Event, nextInputId: string | null) {
    const inputField = event.target as HTMLInputElement; // Cast event.target to HTMLInputElement
    const inputValue = inputField.value;
    const maxLengthString = inputField.getAttribute('maxLength'); // Use getAttribute to ensure string type

    if (maxLengthString) {
      const maxLength = parseInt(maxLengthString, 10);

      // Move to the next input field if current input is filled
      if (inputValue.length === maxLength && nextInputId) {
        const nextInput = document.getElementById(nextInputId) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }

    // Submit form if all OTP fields are filled
    if (this.allOtpFieldsFilled()) {
      this.onSubmit();
    }
  }

  allOtpFieldsFilled(): boolean {
    return this.otp.every((digit) => digit !== ''); // Check if every OTP digit is filled
  }
}
