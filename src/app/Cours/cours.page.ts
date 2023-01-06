import { Component } from '@angular/core';
import {CourBackEndService} from "../services/cour-back-end.service";
import {Cours} from "../interfaces/Cours";
import {ProfesseurBackEndService} from "../services/professeur-back-end.service";
import {Professeurs} from "../interfaces/Professeurs";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'cours.page.html',
  styleUrls: ['cours.page.scss']
})
export class CoursPage {

  public cours: Cours[] | undefined = [];
  public professeurs: Professeurs[] = [];


  constructor( public CoursApi: CourBackEndService,
               private ProfesseursApi: ProfesseurBackEndService,
               private alertController: AlertController) {}


  async ngOnInit() {
    await this.CoursApi.get().subscribe(value => this.cours = value);
    await this.ProfesseursApi.get().subscribe((value) => {
      for (const prof of value) {
        this.professeurs[prof.id] = prof
      }
    } );

  }

  async ionViewWillEnter(){
    await this.ngOnInit();
  }

  async deleteCour(cour: Cours){
    await this.CoursApi.delete(cour).subscribe(() => {
      this.ngOnInit();
    });
  }

  async openAlert(cour: Cours) {
    const messageDelete = 'Voulez-vous supprimer ce cours ?'
    const alerte = await this.alertController.create({
      message: messageDelete,
      buttons: ['Annuler',
        {
          text:'Confirmer',handler: () => {
            this.deleteCour(cour);
          }
        }
      ]
    });

    await alerte.present();
    await alerte.onDidDismiss();
  }

}
