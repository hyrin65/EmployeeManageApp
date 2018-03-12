import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../share/employee.service';
import { Employee } from '../share/employee.module';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.employeeService.getEmployeeList();
  }
  showEdit(emp: Employee) {
    this.employeeService.selectedEmployee = Object.assign({},emp);
  }
  deteleEmployee(id) {
    if (confirm('Are you sure to Delete this record ?') == true)
    this.employeeService.deleteEmployee(id)
    .subscribe(data => {
      this.employeeService.getEmployeeList();
      this.toastr.warning('Deleted Record Successfully', 'Employee Register');
    })
  }
}
