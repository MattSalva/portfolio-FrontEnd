import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exp} from "../model/exp";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExpsService {
  //expURL = 'https://backend-mathiassalva.herokuapp.com/experience/'
  expURL = environment.URL + '/experience/';
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Exp[]>{
    return this.httpClient.get<Exp[]>(this.expURL + 'list');
  }

  public detail(id: number): Observable<Exp>{
    return this.httpClient.get<Exp>(this.expURL + `detail/${id}`);
  }

  public save(experiencia: Exp): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }

  public update(id: number, experiencia: Exp): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }


}
