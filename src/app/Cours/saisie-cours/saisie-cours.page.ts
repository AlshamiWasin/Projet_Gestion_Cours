import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CourBackEndService} from "../../services/cour-back-end.service";
import {Router} from "@angular/router";
import { AlertController } from '@ionic/angular';
import {Cours} from "../../interfaces/Cours";
import {Professeurs} from "../../interfaces/Professeurs";
import {ProfesseurBackEndService} from "../../services/professeur-back-end.service";

@Component({
  selector: 'app-saisie-cours',
  templateUrl: './saisie-cours.page.html',
  styleUrls: ['./saisie-cours.page.scss'],
})
export class SaisieCoursPage implements OnInit {

  ionicForm: any;
  isSubmitted = false;

  public professeurs: Professeurs[] | undefined = [];

  constructor(public formBuilder: FormBuilder,
              private alertController: AlertController,
              private CoursApi: CourBackEndService,
              private router: Router,
              private ProfesseursApi: ProfesseurBackEndService) { }

  async ngOnInit() {

    this.ionicForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      nbEleves: ['', [Validators.required]],
      professeurId: ['', [Validators.required]]
    })

    await this.ProfesseursApi.get().subscribe(value => this.professeurs = value);

  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erreur',
      message: 'Veuillez remplir tous les champs !',
      buttons: ['OK'],
    });
    await alert.present();
  }


  async onSubmit() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      this.presentAlert();
    } else {
      let cour: Cours =
        {
          id: 0,
          nom: this.ionicForm?.value.nom,
          professeurId: this.ionicForm?.value.professeurId,
          nbEleves: this.ionicForm?.value.nbEleves,
        }

      console.log(cour);

      await this.CoursApi.post(cour).toPromise();
      await this.router.navigate(['/tabs/']);
    }
  }

}
