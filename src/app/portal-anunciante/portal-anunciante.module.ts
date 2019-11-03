import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PortalAnunciantePage } from './portal-anunciante.page';

const routes: Routes = [
  {
    path: '',
    component: PortalAnunciantePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PortalAnunciantePage]
})
export class PortalAnunciantePageModule {}
