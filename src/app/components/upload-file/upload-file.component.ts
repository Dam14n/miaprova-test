import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  public files:any =[];
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      name: ['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      password:['', Validators.required],
      file:['', Validators.required]
    });
  }
  
  captureFile(event:any){
      const capturedFile = event.target.files[0]
      this.files.push(capturedFile)
      console.log(capturedFile)
  }

  uploadFile(){
    try{
      const formsDats = new FormData();
      this.files.forEach( (file: File) => {
        console.log(file);
        formsDats.append('files', file)
      });
    // this.rest.post('http://localhost:3000/upload', formsDats)
    // .subscribe(res=>{
    //     console.log('Respuesta del servidor', res)
    // })
    }catch(e){
      console.log(e)
    }
  }
}
