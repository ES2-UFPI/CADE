import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Anuncio } from '../anuncio';
import { AnuncioService } from '../anuncio.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-anuncio',
  templateUrl: './cadastro-anuncio.page.html',
  styleUrls: ['./cadastro-anuncio.page.scss'],
})
export class CadastroAnuncioPage implements OnInit {
  anuncioForm: FormGroup;
  constructor(private _form: FormBuilder,
    private _router: Router,
    private _anuncioService: AnuncioService,
    private _alert: AlertController,
    ) {
    this.anuncioForm = this._form.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      dataInicial: ['', Validators.required],
      dataFinal: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  async cadAnuncio(){
    console.log(this.anuncioForm.value)
    this._anuncioService.save(this.anuncioForm.value as Anuncio)
    const alert = await this._alert.create({
      header: 'Cadastro realizado',
      message: 'Anúncio cadastrado',
      buttons: ['OK']
    })
    await alert.present()
    await alert.onDidDismiss()
    this._router.navigate(['/home'])
  }

  cancelar(){
    this._router.navigate(['/home'])
  }

}
