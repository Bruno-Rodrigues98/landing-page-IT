import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})

export class FormService {

  private readonly API = 'http://localhost:3000/form'


  constructor(private http: HttpClient) { }

  create(form: any){
    return this.http.post(this.API, form).pipe(take(1));
  }
}



