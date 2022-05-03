import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fan } from 'src/app/models/fan.model';
import { FormService } from '../form.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  fans!: Fan[];

  constructor(
    private _service: FormService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.fans = this._service.fans;
  }

  deleteFan(id: number) {
    this._service.deleteFan(id-1);
  }

  navToUpdate(id: number) {
    this._router.navigate(['exercices/update/' + id]);
  }

  navToDetails(id: number) {
    this._router.navigate(['exercices/details/' +id]);
  }

}
