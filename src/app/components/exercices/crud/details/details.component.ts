import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fan } from 'src/app/models/fan.model';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  resolvedFan!: Fan;
  param!: any;

  constructor(
    private _service: FormService,
    private _router : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.param = this._router.snapshot.params['id'] -1;
    this.resolvedFan = this._router.snapshot.data['currentFan'];
  }

}
