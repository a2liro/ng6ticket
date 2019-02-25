import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidebarModule } from './@template/sidebar/sidebar.module';
import { NavbarModule } from './@template/navbar/navbar.module';
import { FooterModule } from './@template/footer/footer.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalService } from './services/util/modal.service';

import { NgxMaskModule } from 'ngx-mask';
import { LoginComponent } from './pages/login/login.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErorInterceptor } from './_helpers/error.interceptor';
import { ProtectedComponent } from './pages/protected/protected.component';
import { NgxLoadingModule } from 'ngx-loading';
import { ProtectedModule } from './pages/protected/protected.module';
import { ProtectedRoutingModule } from './pages/protected/protected-routing.module';
import { TicketModule } from './pages/protected/ticket/ticket.module';
import { TicketFormModule } from './pages/protected/ticket-form/ticket-form.module';

//import { SocketIoModule, SocketIoConfig } from 'ng6-socket-io';   
//const config: SocketIoConfig = { url: 'http://localhost:8000', options: {} };

@NgModule({ 
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    NgxLoadingModule.forRoot({})
    //ProtectedRoutingModule
    //SocketIoModule.forRoot(config) 
  ],
  providers: [
    ModalService,
    {provide:HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:ErorInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
