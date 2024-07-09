import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  dob: Date;
  email: string;
  phoneNo: string;
  location: string;
  username: string;
  roleId: number;
  createdBy: string;
}

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }
}
