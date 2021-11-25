import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  public routes:any = [];
  public files:any =[];
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient ) { }

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      route: ['',Validators.required],
      file:['', Validators.required]
    });
  }

 
  captureRoute(event:any){
    const capturedRoute = (event.target as HTMLTextAreaElement).value;
    this.routes.push(capturedRoute);
    console.log(capturedRoute);
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
    this.http.post('http://localhost:3000/upload', formsDats)
    .subscribe(res=>{
        console.log('Respuesta del servidor', res)
    })
    }catch(e){
      console.log(e)
    }
  }
}
