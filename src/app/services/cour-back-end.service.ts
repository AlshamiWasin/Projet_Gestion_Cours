import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cours} from "../interfaces/Cours";

const CoursUrl = 'http://localhost:3000/Cours';

@Injectable({
  providedIn: 'root'
})
export class CourBackEndService {

  constructor(private http: HttpClient) { }

  get(): Observable<Cours[]> {
    return this.http.get<Cours[]>(CoursUrl);
  }

  getOne(cour: Cours): Observable<Cours[]> {
    return this.http.get<Cours[]>(CoursUrl+'/'+(cour.id||0) );
  }

  post(cour: Cours): Observable<Cours> {
    return this.http.post<Cours>(CoursUrl,cour);
  }

  put(cour: Cours): Observable<Cours> {
    return this.http.put<Cours>(CoursUrl+'/'+(cour.id||0),cour);
  }

  delete(cour: Cours): Observable<Cours> {
    return this.http.delete<Cours>(CoursUrl+'/'+(cour.id||0));
  }

}
