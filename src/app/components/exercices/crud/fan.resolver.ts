import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Fan } from 'src/app/models/fan.model';
import { FormService } from '../form.service';

@Injectable({
  providedIn: 'root'
})

export class FanResolver implements Resolve<Fan> {
  constructor(private _service: FormService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Fan {
    let id = route.params['id'];
    let currentFan = this._service.fans[id-1];
    console.log(currentFan);
    return currentFan;
  }
}
