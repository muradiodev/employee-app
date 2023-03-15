import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
})
export class EmployeeTableComponent implements OnInit {
  employees: Employee[] = [];

  employeeService: EmployeeService;
  modalTitle: string = '';
  modalButton: string = '';

  constructor(private _employeeService: EmployeeService) {
    this.employeeService = _employeeService;
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService
      .getEmployees()
      .subscribe((employees) => (this.employees = employees));
  }

  getEmployee(id: number): void {
    this.employeeService.getEmployeeById(id).subscribe((employee) => {
      // Handle employee data here
    });
  }

  createEmployee(name: string, department: string, salary: number): void {
    const employee: Employee = {
      name,
      department,
      salary,
    };
    this.employeeService.createEmployee(employee).subscribe((newEmployee) => {
      // Handle new employee data here
    });
  }

  updateEmployee(
    id: number,
    name: string,
    department: string,
    salary: number
  ): void {
    const employee: Employee = {
      id,
      name,
      department,
      salary,
    };
    this.employeeService
      .updateEmployee(id, employee)
      .subscribe((updatedEmployee) => {
        // Handle updated employee data here
      });
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter((employee) => employee.id !== id);
    });
  }
}
