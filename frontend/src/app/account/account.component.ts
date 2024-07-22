// import { Component } from '@angular/core';
// import { AuthService } from '../../services/userservices'; 


// @Component({
//   selector: 'app-account',
//   templateUrl: './account.component.html',
//   styleUrl: './account.component.css'
// })
// export class AccountComponent {
//   roleId: any= null;

//   constructor(private userService: AuthService) {}
  
//   ngOnInit(): void {
//     this.roleId = this.userService.getRoleId(); 
//   }
  
// }

// // console.log(roleId);


import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/userservices';
import { LogoutService } from '../services/userservices';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  roleId: number | null = null;

  constructor(
    private userService: AuthService,
    public logoutService: LogoutService
  ) {}

  ngOnInit(): void {
    this.roleId = this.userService.getRoleId();
    console.log('Role ID:', this.roleId); 
  }



}
