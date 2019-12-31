import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CmspageModule } from './cmspage/cmspage.module';
import { BannerComponent } from './banner/banner.component';
import { CommonModule } from '@angular/common';
import { StudentsModule } from './students/students.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { httpInterceptorProviders } from './http-interceptors/index';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    CmspageModule,
    StudentsModule,
    AuthModule,
    AdminModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot(),
    // HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [  Title,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
