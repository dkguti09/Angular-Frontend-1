import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  id: number;
  employee: Employee = new Employee();
  constructor(private emploeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param['id'];
    });
    
    
    this.emploeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = <Employee>data;
    }

    );
  
  }

  onSubmit() {
    this.emploeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.goToEmployeeList();
    })
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}

