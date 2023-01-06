import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { AlertController } from '@ionic/angular';
import {ProfesseurBackEndService} from "../../services/professeur-back-end.service";
import {Professeurs} from "../../interfaces/Professeurs";
import {PhotoService} from "../../services/photo.service";
import {UserPhoto} from "../../interfaces/userphoto";

@Component({
  selector: 'app-saisie-professeurs',
  templateUrl: './saisie-professeurs.page.html',
  styleUrls: ['./saisie-professeurs.page.scss'],
})
export class SaisieProfesseursPage implements OnInit {

  ionicForm: any;
  isSubmitted = false;
  private photos: UserPhoto[] = [];


  constructor(public formBuilder: FormBuilder,
              private alertController: AlertController,
              private ProfesseursApi: ProfesseurBackEndService,
              private router: Router,
              public photoService: PhotoService) { }

  async ngOnInit() {

    this.ionicForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      prenom: ['', [Validators.required]],
      urlPhoto: ['', [Validators.required]],
      age: ['', [Validators.required]],
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

    await this.photoService.loadSaved();
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
      let professeur: Professeurs =
        {
          id: 0,
          nom: this.ionicForm?.value.nom,
          prenom: this.ionicForm?.value.prenom,
          urlPhoto: this.ionicForm?.value.urlPhoto,
          age: this.ionicForm?.value.age,
          login: this.ionicForm?.value.login,
          password: this.ionicForm?.value.password
        }



      await this.ProfesseursApi.post(professeur).toPromise();
      /*this.ionicForm.reset();*/
      await this.router.navigate(['/tabs/Professeurs']);

    }
  }

}
