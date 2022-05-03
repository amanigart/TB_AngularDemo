import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Fan } from 'src/app/models/fan.model';
import { findAncestor, tokenToString } from 'typescript';
import { FormService } from '../form.service';
import { AgeValidator } from '../validators/age.validator';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  registerForm!: FormGroup;
  maxId!: number;

  constructor(
    private _builder : FormBuilder,
    private _service: FormService
  ) {}

  ngOnInit(): void {
    this.blankForm();
    this.maxId = this._service.fans.map(x => x.id)[this._service.fans.length-1];
  }

  blankForm(): void {
    this.registerForm = this._builder.group({
      nom: ['', Validators.required],
      dateNaiss: [null, AgeValidator(13)],
      series: this._builder.array([])
    });
  }

  getSeries(): FormArray {
    return this.registerForm.get('series') as FormArray;
  }

  addSerie() {
    this.getSeries().push(new FormControl('', Validators.required));
  }

  registerFan() {
    // this._service.createFan(this.registerForm.value);
    this._service.createFan(
      {
        id: this.maxId +1,
        nom: this.registerForm.value['nom'],
        dateNaiss: this.registerForm.value['dateNaiss'],
        series: this.registerForm.value['series']
      }
    )
    this.maxId++;
    this.blankForm();
  }
}
