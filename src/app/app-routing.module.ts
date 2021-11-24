import { NgModule } from '@angular/core';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
