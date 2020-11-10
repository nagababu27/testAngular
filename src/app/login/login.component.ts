import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 form:FormGroup

  constructor(public UserService:UserService) {

  this.form = new FormGroup({
    username:new FormControl(''),
    password:new FormControl('',Validators.required)
  });
}

   ngOnInit() {
  }


    dataSubmit(){
      let result=this.UserService.checkUserData1(this.form.value)
      console.log(result)
  	// this.UserService.checkUserData1(this.form.value).subscribe(data=>{
   //    console.log(data)
   //  })
  }
  

}
