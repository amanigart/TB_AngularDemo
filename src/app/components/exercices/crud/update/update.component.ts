import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Fan } from 'src/app/models/fan.model';
import { FormService } from '../../form.service';
import { AgeValidator } from '../../validators/age.validator';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  updateForm!: FormGroup;
  resolvedFan!: Fan;
  param!: any;

  constructor(
    private _builder : FormBuilder,
    private _service: FormService,
    private _router : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.param = this._router.snapshot.params['id'] -1;
    this.resolvedFan = this._router.snapshot.data['currentFan'];
    this.filledForm();
  }

  filledForm(): void {
    this.updateForm = this._builder.group({
      nom: [this.resolvedFan.nom, Validators.required],
      dateNaiss: [this.resolvedFan.dateNaiss, AgeValidator(13)],
      series: this._builder.array([])
    });
    this.resolvedFan.series.forEach(s => this.getSeries().push(new FormControl(s)));
  }

  getSeries(): FormArray {
    return this.updateForm.get('series') as FormArray;
  }

  addSerie() {
    this.getSeries().push(new FormControl('', Validators.required));
  }

  updateFan() {
    this._service.updateFan(
      {
        id: this.resolvedFan.id,
        nom: this.updateForm.value['nom'],
        dateNaiss: this.updateForm.value['dateNaiss'],
        series: this.updateForm.value['series']
      }
    )
  }

}
