import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { NgSelectModule } from '@ng-select/ng-select';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormService } from './form.service';


@Component({
  selector: 'app-form-landing-page',
  templateUrl: './form-landing-page.component.html',
  styleUrls: ['./form-landing-page.component.scss']
})
export class FormLandingPageComponent implements OnInit{
  // formData = {
  //   nome: '',
  //   telefone: '',
  //   email: '',
  //   datahora: '',
  //   modulos: []
  // };

  usuario = {
    nome: '',
    telefone: '',
    email: '',
    datahora: '',
  }

  modulos = [
    { value: 'RO Integral', label: 'RO Integral' },
    { value: 'RL Integral', label: 'RL Integral' },
    { value: 'RM Integral', label: 'RM Integral' }
  ];

  instagramIcon = faInstagram;
  linkedinIcon = faLinkedin;
  youtubeIcon = faYoutube;

  form!: FormGroup ;

  showSuccess = false;
  showDanger = false;

  constructor(private http: HttpClient, private fb: FormBuilder, private service: FormService) { }

  ngOnInit(){
    this.form = new FormGroup({
      id: new FormControl(''),
      nome:  new FormControl('' , [Validators.required]),
      telefone: new FormControl('', [Validators.required, Validators.pattern(/^\d{8,11}$/)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      datahora: new FormControl(''),
      modulo: new FormControl('RM Integral')
    })
  }

  get nome(){
    return this.form.get('nome')!;
  }

  get telefone(){
    return this.form.get('telefone')!;
  }

  get email(){
    return this.form.get('email')!;
  }

  get datahora(){
    return this.form.get('email')!;
  }

  get modulo(){
    return this.form.get('modulo')!;
  }

  submit(){
    if(this.form.valid){
      this.service.create(this.form.value).subscribe(
        sucess =>  this.showSuccess = true,
        error => this.showDanger = true,
        ()=> console.log("request completo")
      )
    }
  }
}
