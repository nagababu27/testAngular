import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
 private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) { }

  public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

login(username: string, password: string) {
	console.log(username)
}


}
