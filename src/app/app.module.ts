import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { LibraryComponent } from './library/library.component';
import { LibraryUploadComponent } from './library/library-upload/library-upload.component';
import { LibraryListComponent } from './library/library-list/library-list.component';

@NgModule({
    declarations: [
        AppComponent,
        EmployeesComponent,
        EmployeeComponent,
        EmployeeListComponent,
        LibraryComponent,
        LibraryUploadComponent,
        LibraryListComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ToastrModule.forRoot(),
        AppRoutingModule,
        BrowserAnimationsModule,
        NgxPaginationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
