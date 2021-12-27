import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { FirstImgComponent } from './components/first-img/first-img.component';
import { MiddleTextComponent } from './components/middle-text/middle-text.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogComponent } from './components/catalogs/catalog/catalog.component';
import { CatalogsComponent } from './components/catalogs/catalogs/catalogs.component';
import { TextComponent } from './components/second-middle-text/text/text.component';
import { SecondMiddleTextComponent } from './components/second-middle-text/second-middle-text/second-middle-text.component';
import { ThirdMiddleTextComponent } from './components/third-middle-text/third-middle-text.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductsComponent } from './components/products/products/products.component';
import { FourthMiddleTextComponent } from './components/fourth-middle-text/fourth-middle-text.component';
import { StoriesComponent } from './components/stories/stories/stories.component';
import { StorieComponent } from './components/stories/storie/storie.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouteComponent } from './components/route/route.component';
import { FileService } from './services/file.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubHeaderComponent,
    FirstImgComponent,
    MiddleTextComponent,
    CatalogComponent,
    CatalogsComponent,
    TextComponent,
    SecondMiddleTextComponent,
    ThirdMiddleTextComponent,
    ProductComponent,
    ProductsComponent,
    FourthMiddleTextComponent,
    StoriesComponent,
    StorieComponent,
    FooterComponent,
    ButtonComponent,
    UploadFileComponent,
    HomeComponent,
    RouteComponent,
  
    
    
    
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
