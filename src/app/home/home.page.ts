import { Component } from '@angular/core';
import { AnuncioService } from '../anuncio.service';
import { Anuncio } from '../anuncio';
import { Perfil } from '../perfil';
import { PerfilService } from '../perfil.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  anuncios: Anuncio[] = []
  perfil:Perfil

  constructor(private _anuncioService: AnuncioService, private _perfilService: PerfilService) {}

  ngOnInit(){
    this._perfilService.load()
    .subscribe(perfil =>{
      this.perfil = perfil
    })
  }
  
  ionViewWillEnter(){
    if(this.perfil){
      this.findAnunciosByPerfil(this.perfil)
    }else{
      this.findAllAnuncios()
    }
  }
  
  findAllAnuncios(){
    this._anuncioService.findAll()
    .subscribe(anuncios =>{
      this.anuncios = anuncios
    })
  }
  findAnunciosByPerfil(perfil:Perfil){
    this._anuncioService.findByPerfil(perfil)
    .subscribe(anunciosMatrix =>{
      anunciosMatrix.forEach(anuncios=>{
        anuncios.forEach(anuncio=>{
          this.anuncios.push(anuncio)
        })
      })
    })
  }
  
  doRefresh(event) {
    this.findAllAnuncios()

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
