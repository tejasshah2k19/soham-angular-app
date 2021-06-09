import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  type = "file";

  files: any;
  rawFiles: any;

  onFileChanges(files:any) {
    console.log("File changed By Method :: ", files);
    console.log("File changed By Binding :: ", this.files);

    console.log("File changed By Binding :: ", this.files[0].base64);
    console.log("Raw files :: ", this.rawFiles);
  }

  test() {
    console.log("This files :: ", this.files);
  }
}
