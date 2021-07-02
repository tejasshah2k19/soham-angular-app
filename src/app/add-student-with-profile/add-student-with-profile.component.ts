import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-add-student-with-profile',
  templateUrl: './add-student-with-profile.component.html',
  styleUrls: ['./add-student-with-profile.component.css']
})
export class AddStudentWithProfileComponent implements OnInit {

  studentName : string = "" 
  file:File | null = null 
  constructor(private fileUploadService:FileUploadService) {

    }

  ngOnInit(): void {

  }

  uploadFile(event:any){
    console.log("upload file()");
    console.log(event.target.files[0]);

    this.file = event.target.files[0];
 
   }


   saveData(){
     console.log(this.studentName);
     console.log(this.file?.name);
     
     this.fileUploadService.uploadFiletoServer(this.file).subscribe(resp=>{
        console.log(resp);
        
     })
   }
}
