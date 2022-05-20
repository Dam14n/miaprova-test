import { FileService } from './../../services/file.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-download-form',
  templateUrl: './download-form.component.html',
  styleUrls: ['./download-form.component.scss']
})
export class DownloadFormComponent implements OnInit {

  public form!: FormGroup;
  public fileName="";
  public ext="";

  constructor( private formBuilder: FormBuilder, private fileSvc:FileService) { }

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      options: ['',Validators.required],
      options2:['', Validators.required]
    });
  }

  uploadData(){
    this.fileSvc.uploadName(this.fileName, this.ext).subscribe(res =>{
        console.log(res);
        var contentDisposition = res.headers.get('content-disposition');
        var filename = contentDisposition.split('=')[1].replace(/\"/g, '');
        console.log(filename);
        const url= window.URL.createObjectURL(res.body);
        var link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
    });
  }
}
