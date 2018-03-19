import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-library-image-position',
    templateUrl: './library-image-position.component.html',
    styleUrls: ['./library-image-position.component.css']
})
export class LibraryImagePositionComponent implements OnInit {
    title: string = 'Hà Nội';
    lat: number = 21.028511;
    lng: number = 105.804817;
    constructor() { }
    ngOnInit() {
    }

}
