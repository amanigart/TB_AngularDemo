import { Injectable, OnInit } from "@angular/core";
import { Fan } from "src/app/models/fan.model";

@Injectable({
  providedIn: 'root'
})

export class FormService implements OnInit {
  fans: Fan[] = [];

  constructor() {
    this.fans = [
      {id: 1, nom: 'Tutu', dateNaiss: new Date('1984-02-16'), series: ["Serie A", "Serie B"]},
      {id: 2, nom: 'Toto', dateNaiss: new Date('1989-02-21'), series: ["Serie C"]}
    ]
  }

  ngOnInit(): void {
  }

  createFan(newFan: Fan) {
    this.fans.push(newFan);
  }

  updateFan(fanToUpdate: Fan) {
    this.fans[fanToUpdate.id-1] = fanToUpdate;
  }

  deleteFan(index: number) {
    this.fans.splice(index, 1);
  }
}
