import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadanunciante',
  templateUrl: './cadanunciante.page.html',
  styleUrls: ['./cadanunciante.page.scss'],
})
export class CadanunciantePage implements OnInit {

  nome: string = ""
  email: string = ""
  CPF: string = ""
  password: string = ""
  cpassword: string = ""


  constructor(public afAuth: AngularFireAuth, public alert: AlertController, public router: Router) {
  }

  ngOnInit() {
  }

  async registrar() {
    const {nome, email, CPF, password, cpassword} = this
    if(password !== cpassword) {
      this.showAlert("Erro","Senhas não coincidem")
      return console.error("Senhas nao coincidem")
    }
    try {
       const res = await this.afAuth.auth.createUserWithEmailAndPassword( email, password )
       console.log(res)
       this.showAlert("Cadastro feito", ":)")
       this.router.navigate(['/home'])
    } catch (error) {
      console.dir(error)
      this.showAlert("Erro", error.message)
    }

  }

  async showAlert(header: string, message: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Certo!"]

    })
    await alert.present();
  }

}
