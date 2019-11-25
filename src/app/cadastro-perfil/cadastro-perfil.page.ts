import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  categoriasToggle:any[] = []
  perfil:Perfil = {raio:2000,categorias:[]}

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
    }
        
  async cadPerfil() {
    this.categoriasToggle.forEach(c=>{
      if(c.isChecked == true){
        this.perfil.categorias.push(c.val)
      }
    })
    console.log(this.perfil)
    this._service.saveStorage(this.perfil);
    const alert = await this._alert.create({
      header: 'Cadastro realizado',
      message: 'Perfil cadastrado',
      buttons: ['OK']
    });
    await alert.present();
    await alert.onDidDismiss();
    this._router.navigate(['/home']);
  }

  raioText(){
    if(this.perfil.raio < 1000){
      const m = this.perfil.raio.valueOf() as Number
      return String(m + 'm')
    }else{
      const km = this.perfil.raio.valueOf() / 1000.0
      return String(km.toFixed(0) + 'km')

    }
  }

}
