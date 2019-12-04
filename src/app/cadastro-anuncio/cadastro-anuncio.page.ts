import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Categories } from '../Categories';
import { Anuncio } from '../anuncio';
import { AnuncioService } from '../anuncio.service';
import { AlertController } from '@ionic/angular';

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

  constructor(private _form: FormBuilder,
              private _router: Router,
              private _anuncioService: AnuncioService,
              private _alert: AlertController,
              ) {
                this.anuncioForm = this._form.group({
                  titulo: ['', Validators.required],
                  descricao: ['', Validators.required],
                  categoria: ['', Validators.required],
                  dataInicial: ['', Validators.required],
                  dataFinal: ['', Validators.required],
                });
              }
    
  ngOnInit() {
    this.categorias = Categories.getInstance().getLista();
  }
  
  ionViewWillEnter(){
    this.an = this._anuncioService.loadLocal()
    if(this.an){
      this.anuncioForm = this._form.group({
        titulo: [this.an.titulo, Validators.required],
        descricao: [this.an.descricao, Validators.required],
        categoria: [this.an.categoria, Validators.required],
        dataInicial: [this.an.dataInicial, Validators.required],
        dataFinal: [this.an.dataFinal, Validators.required],
      });
    }
  }
  
  objFromform(){
    let novoAn = this.anuncioForm.value as Anuncio
    if(this.an){
      if(this.an.id){
        novoAn.id = this.an.id
      }
      novoAn.geolocalizacao = this.an.geolocalizacao
    }
    return novoAn
  }

  getLocation(){
    let novoAn = this.objFromform()
    this._anuncioService.saveLocal(novoAn)
    this._router.navigate(['/maps']);
  }

  async cadAnuncio() {
    let novoAn = this.objFromform()
    console.log(novoAn)
    this._anuncioService.save(novoAn);
    this._anuncioService.saveLocal(null)
    const alert = await this._alert.create({
      header: 'Operação realizada',
      message: 'Anúncio salvo com sucesso',
      buttons: ['OK']
    });
    await alert.present();
    await alert.onDidDismiss();
    this._router.navigate(['/portal-anunciante']);
  }
      
  checkReadyCad(){
    if(this.anuncioForm.valid){
      if(this.an){
        if(this.an.geolocalizacao){
          return true
        }
      }
    }
    return false
  }

  cancelar() {
    this._anuncioService.saveLocal(null)
  }
      
}
    