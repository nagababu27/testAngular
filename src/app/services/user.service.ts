import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  checkUserData1=function(value){
    return value
    // return this.http.post("http://localhost:9000/user/register1",value)  
    //  .pipe(
    //    tap(product => console.log(product))
    //  );
  }
}
