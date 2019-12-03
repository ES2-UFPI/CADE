import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroPerfilPage } from './cadastro-perfil.page';
import { PerfilService } from '../perfil.service';

const routes: Routes = [
  {
    path: '',
    component: CadastroPerfilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroPerfilPage],
})
export class CadastroPerfilPageModule {}
