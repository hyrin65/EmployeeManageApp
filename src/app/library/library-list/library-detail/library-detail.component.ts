import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-library-detail',
    templateUrl: './library-detail.component.html',
    styleUrls: ['./library-detail.component.css']
})
export class LibraryDetailComponent implements OnInit {
    @Input() selectedImage;
    constructor() { }

    ngOnInit() {
    }

}
