import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NuevoUser} from "../model/nuevo-user";
import {Observable} from "rxjs";
import {LoginUser} from "../model/login-user";
import {JwtDto} from "../model/jwt-dto";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //authUrl = 'https://backend-mathiassalva.herokuapp.com/auth/';
  authUrl = environment.URL + '/auth/';
  constructor(private httpClient: HttpClient) { }

  public new(nuevoUser: NuevoUser): Observable<any>{
    return this.httpClient.post<any>(this.authUrl + 'new', nuevoUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authUrl + 'login', loginUser);
  }
}
