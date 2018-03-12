import { Injectable } from '@angular/core';
import { Employee } from './employee.module';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class EmployeeService {

  selectedEmployee: Employee;
  employeeList: Employee[];
  constructor(private http: Http) { }
  postEmployee(emp: Employee) {
    var body = JSON.stringify(emp);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this.http
      .post('http://localhost:57733/api/Employees', body, options).map(x => x.json());
  }
  getEmployeeList() {
    this.http.get('http://localhost:57733/api/Employees')
      .map((data: Response) => {
        return data.json() as Employee[];
      }).toPromise().then(x => {
        this.employeeList = x;
      }); 
  }
  putEmployeeEdit(id, emp : Employee) {
    var body = JSON.stringify(emp);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var options = new RequestOptions({ method: RequestMethod.Put, headers: headers });
    return this.http.put('http://localhost:57733/api/Employees/' + id, body, options).map(x => x.json());
  }
  deleteEmployee(id) {
    return this.http.delete('http://localhost:57733/api/Employees/' + id).map(x => x.json());
  }
}
