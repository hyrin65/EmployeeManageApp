import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../shared/library.service';
import { Params, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employees/share/employee.service';

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.css'],
    providers: [LibraryService, EmployeeService]
})
export class LibraryComponent implements OnInit {
    images;
    private filterId: number;
    checkId = true;
    constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService) {

        this.images = [
            {
                "url": "http://khoahoc.tv/photos/image/052013/28/anh-thien-nhien2.jpg",
                empId: 1
            },
            {
                "url": "http://khoahoc.tv/photos/image/052013/28/anh-thien-nhien3.jpg",
                empId: 1
            },
            {
                "url": "http://khoahoc.tv/photos/image/052013/28/anh-thien-nhien4.jpg",
                empId: 1
            },
            {
                "url": "http://khoahoc.tv/photos/image/052013/28/anh-thien-nhien5.jpg",
                empId: 1
            },
            {
                "url": "http://khoahoc.tv/photos/image/052013/28/anh-thien-nhien6.jpg",
                empId: 1
            },
            {
                "url": "http://khoahoc.tv/photos/image/052013/28/anh-thien-nhien7.jpg",
                empId: 2
            },
            {
                "url": "http://khoahoc.tv/photos/image/052013/28/anh-thien-nhien8.jpg",
                empId: 2
            },
            {
                "url": "http://khoahoc.tv/photos/image/052013/28/anh-thien-nhien9.jpg",
                empId: 2
            },
            {
                "url": "http://khoahoc.tv/photos/image/052013/28/anh-thien-nhien10.jpg",
                empId: 3
            },
            {
                "url": "http://khoahoc.tv/photos/image/052013/28/anh-thien-nhien11.jpg",
                empId: 3
            },
            {
                "url": "http://khoahoc.tv/photos/image/052013/28/anh-thien-nhien12.jpg",
                empId: 3
            },
            {
                "url": "http://khoahoc.tv/photos/image/052013/28/anh-thien-nhien13.jpg",
                empId: 3
            },
            {
                "url": "http://khoahoc.tv/photos/image/052013/28/anh-thien-nhien14.jpg",
                empId: 4
            },
            {
                "url": "http://khoahoc.tv/photos/image/052013/27/anh-thien-nhien.jpg",
                empId: 4
            },
            {
                "url": "http://khoahoc.tv/photos/image/052013/27/anh-thien-nhien2.jpg",
                empId: 4
            },
            {
                "url": "http://khoahoc.tv/photos/image/052013/27/anh-thien-nhien3.jpg",
                empId: 4
            }
        ];
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.filterId = params['id'];
            if (this.filterId == -1) {
                this.checkId = true;
            } else {
                console.log(this.filterId);
                console.log(1212);
                this.checkId = false;
                this.employeeService.getEmployeeListById(this.filterId);
            }
        });
    }
}
