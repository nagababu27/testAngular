import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@NgModule({
  declarations: [
  LoginComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
})
export class SharedModule { }
