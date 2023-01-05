import { Component } from '@angular/core';
import {CourBackEndService} from "../services/cour-back-end.service";
import {Cours} from "../interfaces/Cours";

@Component({
  selector: 'app-tab1',
  templateUrl: 'cours.page.html',
  styleUrls: ['cours.page.scss']
})
export class CoursPage {

  public cours: Cours[] | undefined = [];

  constructor( public CoursApi: CourBackEndService) {}


  async ngOnInit() {
    this.cours = await this.CoursApi.get().toPromise();
  }

}
