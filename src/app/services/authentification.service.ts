import { Injectable } from '@angular/core';
import {ProfesseurBackEndService} from "../services/professeur-back-end.service";
import {Professeurs} from "../interfaces/Professeurs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private ProfesseursApi: ProfesseurBackEndService,private _router: Router) { }

  async login(login: string, password: string) {
    let user: Professeurs;
    await this.ProfesseursApi.getForAuthentification(login, password).subscribe( (value) => {

      user = value[0];
      console.log(user.login);

      if(user.login != "") {
        sessionStorage.setItem('user', JSON.stringify(user));
        this._router.navigate(['/tabs/Cours']);
      } else {
        console.log("Vous n'êtes pas autorisé à accéder à l'application !");
      }
    });

  }
}
