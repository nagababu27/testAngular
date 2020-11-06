import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  checkUserData1=function(value){

 	// return this.http.post("http://localhost:9000/user/register1",value)
    return this.http.post("http://localhost:9000/user/register1",value)
     .pipe(
       tap(product => console.log(product))
     );


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
