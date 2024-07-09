import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Ensure this import is correct

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { EmployeesTableComponent } from './employees-table/employees-table.component';


@NgModule({
    declarations: [
        AppComponent,
        // NavbarComponent,
        LoginComponent,
        NotFoundComponent,
        SignupComponent,
        HomeComponent,
        SubmitFormComponent,
        TableComponent,
        EmployeesTableComponent
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule, // Make sure BrowserAnimationsModule is imported correctly
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatSelectModule,
        MatCardModule,
        CommonModule,
        NavigationBarComponent
    ]
})
export class AppModule {}
