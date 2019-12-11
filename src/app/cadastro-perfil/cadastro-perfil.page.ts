import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Categories } from '../Categories';
import { Perfil } from '../perfil';
import { StorageInterface } from '../storageInterface';

@Component({
  selector: 'app-cadastro-perfil',
  templateUrl: './cadastro-perfil.page.html',
  styleUrls: ['./cadastro-perfil.page.scss'],
})
export class CadastroPerfilPage {
  categoriasToggle:any[] = []
  perfil:Perfil = {raio:2000,categorias:[]}

  constructor(private _router: Router,
    @Inject('storagePerfil')private _service: StorageInterface,
      private _alert: AlertController,
    ){
      const categorias = Categories.getInstance().getLista();
      categorias.forEach(c=>{
        this.categoriasToggle.push({val:c, isChecked:false} as any)
      })
    }
        
  async cadPerfil() {
    this.categoriasToggle.forEach(c=>{
      this.categoriaSelecionada(c);
    })
    await this._service.save('perfil',this.perfil);
    const alert = await this._alert.create({
      header: 'Cadastro realizado',
      message: 'Perfil cadastrado',
      buttons: ['OK']
    });
    await alert.present();
    await alert.onDidDismiss();
    this._router.navigate(['/home']);
  }

  private categoriaSelecionada(c: any) {
    if (c.isChecked == true) {
      this.perfil.categorias.push(c.val);
    }
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
