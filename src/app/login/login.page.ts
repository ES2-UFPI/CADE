import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { CadAnunPage } from '../cad-anun/cad-anun.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ''
  password: string = ''
    constructor(public afAuth: AngularFireAuth, public alert: AlertController, public router: Router) {
     }

    ngOnInit() {
    }

    async login() {
      const{ username, password } = this;
      try {
        const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password);
        this.router.navigate(['/home'])
      } catch (err) {
        this.showAlert('Credenciais invalidas!', 'tente novamente');
        console.dir(err);

      }
    }

    async showAlert(header: string, message: string){
      const alert = await this.alert.create({
        header,
        message,
        buttons: ['Certo!']

      })
      await alert.present();
    }

    irCadastro(){
      this.router.navigate(['/cad-anun'])
    }

}
