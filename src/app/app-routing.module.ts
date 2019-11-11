import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // tslint:disable-next-line: max-line-length
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cad-anuncio', loadChildren: './cadastro-anuncio/cadastro-anuncio.module#CadastroAnuncioPageModule' },
  { path: 'cad-perfil', loadChildren: './cadastro-perfil/cadastro-perfil.module#CadastroPerfilPageModule' },
  { path: 'cadanunciante', loadChildren: './cadanunciante/cadanunciante.module#CadanunciantePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
