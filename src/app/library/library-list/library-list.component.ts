import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-library-list',
    templateUrl: './library-list.component.html',
    styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {
    @Input() datasource;
    @Input() filterId;
    selectedImage;
    constructor() { }

    ngOnInit() {
        //console.log(this.datasource);
    }
    setSelectedImage(image) {
        this.selectedImage = image;
    }
}
