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
    await this.CoursApi.get().subscribe(value => this.cours = value);
  }

  async ionViewWillEnter(){
    await this.ngOnInit();
  }

  async deleteCour(cour: Cours){
    await this.CoursApi.delete(cour).subscribe();
    await this.ngOnInit();
  }

}
