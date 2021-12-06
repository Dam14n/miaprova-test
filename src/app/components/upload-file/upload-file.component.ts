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
  public files:any =[];
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private fileSvc: FileService ) { }

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      route: ['',Validators.required],
      file:['', Validators.required]
    });
  }

 
  
  captureFile(event:any){
    const capturedFile = event.target.files;
    this.files.push(capturedFile);
    console.log(capturedFile);
  }

  uploadFile(){
    try{
      const formsDats = new FormData();
      this.files.forEach( (file: File) => {
        console.log(file);
        formsDats.append('files', file)
      });
    this.fileSvc.uploadFile(formsDats)
    .subscribe(res=>{
        console.log('Respuesta del servidor', res);
        this.route = "";
        this.files=[];
    })
    }catch(e){
      console.log(e)
    }
  }
}

