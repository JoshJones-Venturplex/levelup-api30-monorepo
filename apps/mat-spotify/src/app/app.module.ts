import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumComponent } from './album/album.component';
import { ListComponent } from './album/list/list.component';
import { DetailComponent } from './album/detail/detail.component';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@workspace/material';
import { CoreStateModule } from '@workspace/core-state';
import { LogoutPromptComponent } from './logout-prompt/logout-prompt.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@workspace/core-data';

@NgModule({
  declarations: [AppComponent, HomeComponent, AlbumComponent, ListComponent, DetailComponent, LoginComponent, CallbackComponent, LogoutPromptComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreStateModule
  ],
  entryComponents: [LogoutPromptComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
