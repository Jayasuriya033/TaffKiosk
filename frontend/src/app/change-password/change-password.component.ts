import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OtpSend } from '../../services/userservices';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  mobileNumberValidation: FormGroup;
  otpValidation: FormGroup;
  passwordValidation: FormGroup;
  error: string | null = null;
  showPassword:boolean = true;
  status: any = 1;
  validationOtp: boolean = false;
  mobileNumber:any = ""

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private otpSend : OtpSend,
    private snackBar: MatSnackBar,

  ) 
  {
    this.mobileNumberValidation = this.fb.group({
      mobileNumber: ['', [Validators.required]],     
    }, );
    this.otpValidation = this.fb.group({
      otp: ['', [Validators.required]],
    }, );
    this.passwordValidation = this.fb.group({
       newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, );
    this.changePasswordForm = this.fb.group({
      otpValidation: this.otpValidation,
      mobileNumberValidation: this.mobileNumberValidation,
      passwordValidation: this.passwordValidation,
    },{  validator: this.passwordMatchValidator
    } );
  }
     // newPassword: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', [Validators.required]]
    //  {
    //    validator: this.passwordMatchValidator
    //    }
     
  ngOnInit(): void {
  }
  showPasswordfun(){
    this.showPassword = !this.showPassword;
  }

onSendOtp(): void {
  // this.status = 2;
  if (this.mobileNumberValidation.invalid) {
    this.error = 'Please fill in the Mobile Number.';
    return;
  }
  const mobileNumber = this.mobileNumberValidation.value;
  this.otpSend.otp(mobileNumber).subscribe(
    response => {
      console.log("Mobile number sent successfully...");
      if(response.validation){
        this.status = 2;
      }
    },
    error => {
      this.error = 'Invalid username or password';
      this.snackBar.open('Mobile Number not Exist..', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['error-snackbar']
      });
      console.error('Error logging in:', error);
    }
  );
}

verifyOtp():void{
  this.validationOtp = true;
  this.status = 3;
  if (this.otpValidation.invalid) {
    this.error = 'Please fill the OTP';
    return;
  }
  const otpValidation = this.otpValidation.value;
  this.otpSend.otp(otpValidation).subscribe(
    response => {
      console.log("Mobile number sent successfully...");
    },
    error => {
      console.log("Mobile number is not there..");
    }
  );

}

  passwordMatchValidator(form: FormGroup) {
    return form.get('newPassword')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      console.log('Password changed successfully', this.changePasswordForm.value);
      this.router.navigate(['/']);
    }
  }
  differentNumber(){
    this.status = 1;
  }

  resetForm() {
    this.changePasswordForm.reset();
  }
}
