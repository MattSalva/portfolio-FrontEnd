import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Persona} from "../model/persona.model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL = 'https://backend-mathiassalva.herokuapp.com/personas/';
  URL = environment.URL + '/personas/';
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL + `detail/${id}`);
  }

  public update(id: number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, persona);
  }

}
