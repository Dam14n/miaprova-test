import { FileService } from './../../services/file.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-template-form',
  templateUrl: './upload-template-form.component.html',
  styleUrls: ['./upload-template-form.component.scss']
})
export class UploadTemplateFormComponent implements OnInit {

  public name= "";
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
      formData.append( 'file', this.files[i], this.files[i].name);
    }
    this.fileSvc.newUploadFile(formData, this.name).subscribe( res=> {console.log("Response:", res)}
    )
  }
}
