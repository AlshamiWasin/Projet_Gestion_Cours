import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ProfesseurBackEndService} from "../services/professeur-back-end.service";
import { AuthentificationService } from "../services/authentification.service"
import {Professeurs} from "../interfaces/Professeurs";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ionicForm: any;
  isSubmitted = false;

  constructor( public formBuilder: FormBuilder,
               private ProfesseursApi: ProfesseurBackEndService,
               private AuthServices: AuthentificationService,

  ) { }

  ngOnInit() {



    this.ionicForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      password: ['', [Validators.required]],
    })
  }

  async onSubmit() {
    this.isSubmitted = true;
    console.log(this.ionicForm?.value.login);
    console.log(this.ionicForm?.value.password);
    if (!this.ionicForm.valid) {

      //this.presentAlert();
    } else {
      const login =  this.ionicForm?.value.login;
      const password = this.ionicForm?.value.password;
      this.AuthServices.login(login, password);
    }
  }
}
