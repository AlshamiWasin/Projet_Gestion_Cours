import { Injectable } from '@angular/core';
import {ProfesseurBackEndService} from "../services/professeur-back-end.service";
import {Professeurs} from "../interfaces/Professeurs";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private ProfesseursApi: ProfesseurBackEndService) { }

  async login(login: string, password: string) {
    let user: Professeurs;
    await this.ProfesseursApi.getForAuthentification(login, password).subscribe( (value) => {
      user = value;
      console.log(user);

      if(user.login != "") {
        sessionStorage.setItem('user', user.login);
      } else {
        console.log("Vous n'êtes pas autorisé à accéder à l'application !");
      }
    });

  }
}
