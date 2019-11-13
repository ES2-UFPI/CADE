import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
              private _route: ActivatedRoute,
              private _router: Router,
              private _anuncioService: AnuncioService,
              private _alert: AlertController,
    ) { }
    
    ngOnInit() {
      this.categorias = Object.keys(Categories).map(k => Categories[k as any]);
      this.an = this._anuncioService.loadLocal()
      if(this.an){
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

  
  formAnuncio(){
    let novoAn = this.anuncioForm.value as Anuncio
    if(this.an){
      novoAn.id = this.an.id
      novoAn.geolocalizacao = this.an.geolocalizacao
    }
    return novoAn
  }

  getLocation(){
    let novoAn = this.formAnuncio()
    this._anuncioService.saveLocal(novoAn)
    this._router.navigate(['/maps']);
  }

  async cadAnuncio() {
    let novoAn = this.formAnuncio()
    console.log(novoAn)
    if(novoAn.geolocalizacao){
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
    }else{
      const alert = await this._alert.create({
        header: 'Erro',
        message: 'Selecione uma localização',
        buttons: ['OK']
          });
          await alert.present();
          await alert.onDidDismiss();
        }
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
    