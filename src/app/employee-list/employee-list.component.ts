import { Component } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common'; // Only CommonModule
import { EmployeeService } from '../employee.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,private router:Router) {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(
      (data) => {
        this.employees = data;
      }
    );
  }
  updateEmployee(id:string){
    this.router.navigate(['/update-employee',id]);
  }
  deleteEmployee(id:string){
    this.employeeService.deleteEmployee(id).subscribe(data =>
      {
        console.log(data);
        this.getEmployees();
      }, err => console.log(err)
    )
  }

  employeeDetails(id:string){
    this.router.navigate(['/employee-details',id]);
  }
}
