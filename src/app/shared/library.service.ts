import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

@Injectable()
export class LibraryService {

    constructor(private http: Http) { }
    postImage(formData) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        var options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
        return this.http.post('http://localhost:57733/api/Employees', formData, options)
            .map(x => x.json());
    }
}
