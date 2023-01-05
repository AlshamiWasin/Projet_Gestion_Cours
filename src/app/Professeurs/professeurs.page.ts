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

}
