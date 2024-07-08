import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
// import { SubmitFormComponent } from './submit-form/submit-form.component';
// import { TableComponent } from './table/table.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', redirectTo: '' },
  { path: 'signup', component: SignupComponent },
  { path: 'submit-form', component: SubmitFormComponent },
  { path: 'user',component:TableComponent},

  // { path: 'user',component:TableComponent},
  { path: 'navigation-bar',component:NavigationBarComponent},
  { path: 'submit-form', component: SubmitFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
