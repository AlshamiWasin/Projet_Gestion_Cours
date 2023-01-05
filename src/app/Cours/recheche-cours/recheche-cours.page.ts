import { Component, OnInit } from '@angular/core';
import {CourBackEndService} from "../../services/cour-back-end.service";
import {Cours} from "../../interfaces/Cours";

@Component({
  selector: 'app-recheche-cours',
  templateUrl: './recheche-cours.page.html',
  styleUrls: ['./recheche-cours.page.scss'],
})
export class RechecheCoursPage implements OnInit {

  public results: Cours[] = [];



  constructor( public CoursApi: CourBackEndService) {}

  isFocus = false;

  async ngOnInit() {
    await this.CoursApi.get().subscribe(value => this.results = value);
  }

  async handleChange(event: any) {
    this.isFocus = true;
    const query = event.target.value.toLowerCase();
    await this.CoursApi.get().subscribe(value => this.results = value.filter(d => d.nom.toLowerCase().indexOf(query) > -1))
  }

  async deleteCour(cour: Cours){
    await this.CoursApi.delete(cour).subscribe();
    await this.ngOnInit();
  }

}
