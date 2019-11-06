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
  an:Anuncio
  location:ILatLng

  constructor(private _form: FormBuilder,
              private _route: ActivatedRoute,
              private _router: Router,
              private _anuncioService: AnuncioService,
              private _alert: AlertController,
    ) {
      this.categorias = Object.keys(Categories).map(k => Categories[k as any]);
      
      if(this._router.getCurrentNavigation().extras.state){
        this.an = this._router.getCurrentNavigation().extras.state.anuncio;
        this.anuncioForm = this._form.group({
          titulo: [this.an.titulo, Validators.required],
          descricao: [this.an.descricao, Validators.required],
          categoria: [this.an.categoria, Validators.required],
          dataInicial: [this.an.dataInicial, Validators.required],
          dataFinal: [this.an.dataFinal, Validators.required],
        });
      }else{
        this.anuncioForm = this._form.group({
          titulo: ['', Validators.required],
          descricao: ['', Validators.required],
          categoria: ['', Validators.required],
          dataInicial: ['', Validators.required],
          dataFinal: ['', Validators.required],
        });
      }
  }

  ngOnInit() {
    const data = this._router.getCurrentNavigation().extras.state.location
    console.log(data)
    this.location = data
  }

  async cadAnuncio() {
    let novoAn = this.anuncioForm.value as Anuncio
    novoAn.id = this.an.id
    console.log(novoAn);
    novoAn.geolocalizacao = this.location
    this._anuncioService.save(novoAn);
    const alert = await this._alert.create({
      header: 'Operação realizada',
      message: 'Anúncio salvo com sucesso',
      buttons: ['OK']
    });
    await alert.present();
    await alert.onDidDismiss();
    this._router.navigate(['/portal-anuncio']);
  }

  cancelar() {
    this._router.navigate(['/portal-anuncio']);
  }
  
  voltar() {
    this._router.navigate(['/maps'])
  }
  
}
