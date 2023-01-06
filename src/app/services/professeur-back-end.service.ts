import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Professeurs} from "../interfaces/Professeurs";

const ProfesseurUrl = 'http://localhost:3000/Professeurs';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurBackEndService {

  constructor(private http: HttpClient) { }

  get(): Observable<Professeurs[]> {
    return this.http.get<Professeurs[]>(ProfesseurUrl);
  }

  getOne(professeurs: Professeurs): Observable<Professeurs[]> {
    return this.http.get<Professeurs[]>(ProfesseurUrl+'/'+(professeurs.id||0) );
  }

  getForAuthentification(login: string, password: string): Observable<Professeurs> {
    let parameters = {"login":login, "password": password};
    let queryParams = new HttpParams({ fromObject: parameters });
    return this.http.get<Professeurs>(ProfesseurUrl, {params: queryParams} );
  }

  post(professeurs: Professeurs): Observable<Professeurs> {
    return this.http.post<Professeurs>(ProfesseurUrl,professeurs);
  }

  put(professeurs: Professeurs): Observable<Professeurs> {
    return this.http.put<Professeurs>(ProfesseurUrl+'/'+(professeurs.id||0),professeurs);
  }

  delete(professeurs: Professeurs): Observable<Professeurs> {
    return this.http.delete<Professeurs>(ProfesseurUrl+'/'+(professeurs.id||0));
  }



}
