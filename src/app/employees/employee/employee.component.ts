import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmployeeService } from '../share/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../share/employee.module';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    @ViewChild('closeModal') closeModal: ElementRef;
    constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }

    ngOnInit() {
        this.resetForm();
    }
    resetForm(form?: NgForm) {
        if (form != null)
            form.reset();
        this.employeeService.selectedEmployee = {
            EmployeeId: null,
            FirstName: '',
            LastName: '',
            EmpCode: '',
            Position: '',
            Office: ''
        }
    }
    onSubmit(form: NgForm) {
        if (form.value.EmployeeId == null) {
            this.employeeService.postEmployee(form.value)
                .subscribe(data => {
                    this.resetForm(form);
                    this.closeModal.nativeElement.click();
                    this.employeeService.getEmployeeList();
                    this.toastr.success('New Record Added Successfully', 'Employee Register');
                })
        } else {
            //edit
            var employeeName = form.value.LastName;
            this.employeeService.putEmployeeEdit(form.value.EmployeeId, form.value)
                .subscribe(data => {
                    this.resetForm(form);
                    this.closeModal.nativeElement.click();
                    this.employeeService.getEmployeeList();
                    this.toastr.info('Update ' + employeeName + '\'Infomation Successfully', 'Employee Update');
                })
        }
    }
}
