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
import { FourthMiddleTextComponent } from './components/fourth-middle-text/fourth-middle-text.component';
import { StoriesComponent } from './components/stories/stories/stories.component';
import { StorieComponent } from './components/stories/storie/storie.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubHeaderComponent,
    FirstImgComponent,
    MiddleTextComponent,
    CatalogComponent,
    CatalogsComponent,
    FourthMiddleTextComponent,
    StoriesComponent,
    StorieComponent,
    FooterComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
