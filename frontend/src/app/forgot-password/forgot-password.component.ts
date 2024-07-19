import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  mobileNumber: string = '';
  otp: string[] = ['', '', '', '']; 
  otpSent: boolean = false;

  sendOTP() {
    
    this.otpSent = true;
  }

  onSubmit() {
   
    const enteredOTP = this.otp.join(''); 
    console.log('Submitting OTP: ', enteredOTP);
  }

  otpInputHandler(event: Event, nextInputId: string | null) {
    const inputField = event.target as HTMLInputElement; 
    const inputValue = inputField.value;
    const maxLengthString = inputField.getAttribute('maxLength'); 

    if (maxLengthString) {
      const maxLength = parseInt(maxLengthString, 10);
      if (inputValue.length === maxLength && nextInputId) {
        const nextInput = document.getElementById(nextInputId) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }

    
    if (this.allOtpFieldsFilled()) {
      this.onSubmit();
    }
  }

  allOtpFieldsFilled(): boolean {
    return this.otp.every((digit) => digit !== ''); 
  }
}
