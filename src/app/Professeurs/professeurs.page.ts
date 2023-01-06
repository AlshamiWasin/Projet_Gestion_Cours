import { Component } from '@angular/core';
import {Professeurs} from "../interfaces/Professeurs";
import {ProfesseurBackEndService} from "../services/professeur-back-end.service";
import {Cours} from "../interfaces/Cours";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'professeurs.page.html',
  styleUrls: ['professeurs.page.scss']
})
export class ProfesseursPage {

  public professeurs: Professeurs[] | undefined = [];

  constructor(public ProfesseursApi: ProfesseurBackEndService,
              private alertController: AlertController) {}

  async ngOnInit() {
    await this.ProfesseursApi.get().subscribe(value => this.professeurs = value);
  }

  async ionViewWillEnter(){
    await this.ngOnInit();
  }

  async deleteProfesseur(professeurs: Professeurs){
    await this.ProfesseursApi.delete(professeurs).subscribe(() => {
      this.ngOnInit();
    });
  }

  async openAlert(professeur: Professeurs) {
    const messageDelete = 'Voulez-vous supprimer ?'
    const alerte = await this.alertController.create({
      message: messageDelete,
      buttons: ['Annuler',
        {
          text:'Confirmer',handler: () => {
            this.deleteProfesseur(professeur);
          }
        }
    ]
    });

    await alerte.present();
    await alerte.onDidDismiss();
  }

  triNom = false;
  triPrenom = false;
  triAge = false;

  triColonneNom() {
    if(this.triNom == false) {
      this.professeurs?.sort((a, b) => a.nom.localeCompare(b.nom));
      this.triNom = true;
    }else {
      this.professeurs?.sort((a, b) => b.nom.localeCompare(a.nom));
      this.triNom = false;
    }
  }

  triColonnePrenom() {
    if(this.triPrenom == false) {
      this.professeurs?.sort((a, b) => a.prenom.localeCompare(b.prenom))
      this.triPrenom = true;
    }else {
      this.professeurs?.sort((a, b) => b.prenom.localeCompare(a.prenom))
      this.triPrenom = false;
    }
  }
  
  triColonneAge() {
    if(this.triAge == false) {
      this.professeurs?.sort((a, b) => a.age - b.age)
      this.triAge = true;
    }else {
      this.professeurs?.sort((a, b) => b.age - a.age)
      this.triAge = false;
    }
  }

}
