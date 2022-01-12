import { DownloadFormComponent } from './components/download-form/download-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RouteComponent } from './components/route/route.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"form",
    component: UploadFileComponent
  },
  {
    path:"route/:id",
    component: RouteComponent
  },
  {
    path:"download-form",
    component: DownloadFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
