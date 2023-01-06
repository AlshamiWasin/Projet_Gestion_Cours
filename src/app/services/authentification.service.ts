import { Injectable } from '@angular/core';
import {ProfesseurBackEndService} from "../services/professeur-back-end.service";
import {Professeurs} from "../interfaces/Professeurs";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private ProfesseursApi: ProfesseurBackEndService) { }


  login(login: any, password: any) {
    let user : Professeurs|null = null;
    this.ProfesseursApi.getForAuthentification(login, password).subscribe(value => user = value)

    /*if(user) {
      sessionStorage.setItem('user', user.login)
    }*/
  }
}
