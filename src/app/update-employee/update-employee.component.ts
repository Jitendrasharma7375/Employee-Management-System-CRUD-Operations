import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'], // Corrected from styleUrl to styleUrls
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  id: string = '';

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      (data) => {
        this.employee = data;
      },
      (err) => console.log('Error fetching employee:', err)
    );
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      (response) => {
        console.log('Employee updated successfully:', response);
        this.router.navigate(['/employees']); // Navigate back to employee list
      },
      (error) => console.log('Error updating employee:', error)
    );
  }
}
