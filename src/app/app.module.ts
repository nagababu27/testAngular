import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';

import { UserService } from './user.service';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

let Routes=[{
	path:"hi",component:HomeComponentComponent}]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
