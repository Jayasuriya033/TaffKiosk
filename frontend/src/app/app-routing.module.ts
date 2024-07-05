<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];
=======
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { NotFoundComponent } from './not-found/not-found.component';

// const routes: Routes = [
//   {path:"", component: LoginComponent},
//   {path:"login", component: LoginComponent},

//   {path:"notfound", component: NotFoundComponent},
//   {path:"**", redirectTo:"notfound"}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', redirectTo: '' },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: NotFoundComponent }
];
>>>>>>> bb1bb1f787f5ce8683ce3cac7fc4e83c63e9c7e2

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
