import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GeolocationService } from './geolocation.service';

const routes: Routes = [
  { path: '', redirectTo: 'cadanunciante', pathMatch: 'full' },
  // tslint:disable-next-line: max-line-length
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cad-anuncio', loadChildren: './cadastro-anuncio/cadastro-anuncio.module#CadastroAnuncioPageModule'},
  { path: 'cad-perfil', loadChildren: './cadastro-perfil/cadastro-perfil.module#CadastroPerfilPageModule' },

  { path: 'portal-anunciante', loadChildren: './portal-anunciante/portal-anunciante.module#PortalAnunciantePageModule' },
  { path: 'maps', loadChildren: './cadastro-anuncio/maps/maps.module#MapsPageModule', resolve: {location: GeolocationService}},
  { path: 'cad-anun', loadChildren: './cad-anun/cad-anun.module#CadAnunPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
