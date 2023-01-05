import { Component } from '@angular/core';
import {Professeurs} from "../interfaces/Professeurs";
import {ProfesseurBackEndService} from "../services/professeur-back-end.service";
import {Cours} from "../interfaces/Cours";

@Component({
  selector: 'app-tab2',
  templateUrl: 'professeurs.page.html',
  styleUrls: ['professeurs.page.scss']
})
export class ProfesseursPage {

  public professeurs: Professeurs[] | undefined = [];

  constructor(public ProfesseursApi: ProfesseurBackEndService) {}

  async ngOnInit() {
    await this.ProfesseursApi.get().subscribe(value => this.professeurs = value);
  }

  async ionViewWillEnter(){
    await this.ngOnInit();
  }

  async deleteProfesseur(professeurs: Professeurs){
    await this.ProfesseursApi.delete(professeurs).subscribe();
    await this.ngOnInit();
  }

}
