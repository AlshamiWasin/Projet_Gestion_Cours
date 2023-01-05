import { Component, OnInit } from '@angular/core';
import {Cours} from "../../interfaces/Cours";
import {ProfesseurBackEndService} from "../../services/professeur-back-end.service";
import {Professeurs} from "../../interfaces/Professeurs";

@Component({
  selector: 'app-recherche-professeurs',
  templateUrl: './recherche-professeurs.page.html',
  styleUrls: ['./recherche-professeurs.page.scss'],
})
export class RechercheProfesseursPage implements OnInit {

  public results: Professeurs[] = [];

  constructor( public ProfesseursApi: ProfesseurBackEndService) { }

  isFocus = false;

  async ngOnInit() {
    await this.ProfesseursApi.get().subscribe(value => this.results = value);
  }

  async ionViewWillEnter(){
    await this.ngOnInit();
  }

  async handleChange(event: any) {
    this.isFocus = true;
    const query = event.target.value.toLowerCase();
    await this.ProfesseursApi.get().subscribe(value => this.results = value.filter(d => d.nom.toLowerCase().indexOf(query) > -1))
  }

  async deleteProfesseur(professeurs: Professeurs){
    await this.ProfesseursApi.delete(professeurs).subscribe(() => {
      this.ngOnInit();
    });
  }
}
