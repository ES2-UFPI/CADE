import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PerfilService } from '../perfil.service';
import { AlertController } from '@ionic/angular';
import { Categories } from '../Categories';
import { Perfil } from '../perfil';

@Component({
  selector: 'app-cadastro-perfil',
  templateUrl: './cadastro-perfil.page.html',
  styleUrls: ['./cadastro-perfil.page.scss'],
})
export class CadastroPerfilPage {

  // perfilForm: FormGroup;
  categoriasToggle:any[] = []
  perfil:Perfil = {raio:-1,categorias:[]}

  constructor(private _form: FormBuilder,
      private _router: Router,
      private _service: PerfilService,
      private _alert: AlertController,
    ){
      var categorias = Object.keys(Categories).map(k => Categories[k as any]);
      categorias.forEach(c=>{
        this.categoriasToggle.push({val:c, isChecked:false} as any)
      })
      console.log(this.categoriasToggle)
      
      // this.perfilForm = this._form.group({
        // raio: ['', [Validators.required]],
        // categorias: _form.group({
          //   0: ['', Validators.required],
          // }),
          // });
        }
        
  async cadPerfil() {
    this.categoriasToggle.forEach(c=>{
      if(c.isChecked == true){
        this.perfil.categorias.push(c.val)
      }
    })
    console.log(this.perfil)
    this._service.save(this.perfil);
    const alert = await this._alert.create({
      header: 'Cadastro realizado',
      message: 'Perfil cadastrado',
      buttons: ['OK']
    });
    await alert.present();
    await alert.onDidDismiss();
    this._router.navigate(['/home']);
  }

  cancelar() {
    this._router.navigate(['/home']);
  }
}
