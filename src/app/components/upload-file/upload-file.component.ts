import { FileService } from './../../services/file.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  
  public route= "";
  public files: any = [];
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private fileSvc: FileService ) { }

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      route: ['',Validators.required],
      file:['', Validators.required]
    });
  }

  captureFile(e:any){
    this.files = e.target.files;

  }

  uploadFile(){
    let formData = new FormData();
    for(let i = 0; i< this.files.length; i++){
      formData.append("upload[]", this.files[i], this.files[i].name);
    }
    this.fileSvc.uploadFile(formData).subscribe( res=> {console.log("Resp onse:", res)}
    )
  }
}

