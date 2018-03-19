import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { LibraryService } from '../../shared/library.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-library-upload',
    templateUrl: './library-upload.component.html',
    styleUrls: ['./library-upload.component.css']
})
export class LibraryUploadComponent implements OnInit, OnDestroy {
    @ViewChild('fileInput') fileInput;
    @ViewChild('buttonClose') buttonClose: ElementRef;
    @ViewChild('showImage') showImage;
    checkFile = false;
    fileBrowser: any;
    constructor(private libraryService: LibraryService, private toastr: ToastrService) { }

    ngOnInit() {
    }
    ngOnDestroy() {
    }
    upload() {
        let fileBrowser = this.fileInput.nativeElement;
        if (fileBrowser.files && fileBrowser.files[0]) {
            const formData = new FormData();
            formData.append("image", fileBrowser.files[0]);
            this.libraryService.postImage(formData)
                .subscribe(res => {
                    // do stuff w/my uploaded file
                });
        }
        this.buttonClose.nativeElement.click();
    }
    changeFile() {
        this.checkFile = true;
        this.fileBrowser = this.fileInput.nativeElement;
        var preview = this.showImage.nativeElement;
        var file = this.fileBrowser.files && this.fileBrowser.files[0];
        var reader = new FileReader();

        reader.addEventListener("load", function () {
            preview.src = reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }
}
