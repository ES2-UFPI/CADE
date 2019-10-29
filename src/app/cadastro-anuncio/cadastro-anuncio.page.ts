import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Categories } from '../Categories';
import { Anuncio } from '../anuncio';
import { AnuncioService } from '../anuncio.service';
import { AlertController } from '@ionic/angular';
import { ILatLng} from '@ionic-native/google-maps/ngx';

@Component({
  selector: 'app-cadastro-anuncio',
  templateUrl: './cadastro-anuncio.page.html',
  styleUrls: ['./cadastro-anuncio.page.scss'],
})
export class CadastroAnuncioPage implements OnInit {
  myDate: string = new Date().toISOString()
  anuncioForm: FormGroup
  categorias: string[] = []
  location:ILatLng

  constructor(private _form: FormBuilder,
              private _router: Router,
              private _anuncioService: AnuncioService,
              private _alert: AlertController,
              private _route: ActivatedRoute,
    ) {
      this.categorias = Object.keys(Categories).map(k => Categories[k as any]);
      console.log(this.categorias);
      this.anuncioForm = this._form.group({
        titulo: ['', Validators.required],
        descricao: ['', Validators.required],
        categoria: ['', Validators.required],
        dataInicial: ['', Validators.required],
        dataFinal: ['', Validators.required],
      })
  }

  ngOnInit() {
    const data = this._router.getCurrentNavigation().extras.state.location
    console.log(data)
    this.location = data
  }

  async cadAnuncio() {
    console.log(this.anuncioForm.value);
    const anuncio = this.anuncioForm.value as Anuncio
    anuncio.geolocalizacao = this.location
    this._anuncioService.save(anuncio);
    const alert = await this._alert.create({
      header: 'Cadastro realizado',
      message: 'Anúncio cadastrado',
      buttons: ['OK']
    });
    await alert.present();
    await alert.onDidDismiss();
    this._router.navigate(['/home'])
  }

  cancelar() {
    this._router.navigate(['/home'])
  }
  
  voltar() {
    this._router.navigate(['/maps'])
  }
  
}
