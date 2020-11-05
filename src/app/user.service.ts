import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  checkUserData1=function(username,password){
 	// if(username!=1 || password!=2){
 	// 	setTimeout(function(){ return true }, 3000);
 	// }else{
 	// 	setTimeout(function(){ return false }, 3000);
 	// }

 	this.http.get("http://localhost:9000/register").
    subscribe(data => {
            console.log(data)
        })


 }


/* async  checkUserData(username,password) {
  let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("hihihih") }, 3000);
  });
}*/
 checkUserData(n1, n2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("true"), 3000);
  });
}
}
