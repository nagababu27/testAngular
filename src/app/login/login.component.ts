import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import { FormGroup,FormControl,Validators } from '@angular/forms';
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
dataSubmit(){
  console.log(this.form.username)
}

   ngOnInit() {
  }


  //   onSubmit(){

  // 	var result=this.UserService.checkUserData1(this.username,this.password)
  //    console.log(result)

  // 	this.UserService.checkUserData(this.username,this.password).then(result=>{
  // 		console.log(result)
  // 	})

  
  // }
  

}
