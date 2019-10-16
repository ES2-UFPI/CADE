import { Component } from '@angular/core';
import { AnuncioService } from '../anuncio.service';
import { Anuncio } from '../anuncio';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  anuncios: Anuncio[]

  constructor(private _anuncioService: AnuncioService) {}

  ionViewWillEnter(){
    this.findAllAnuncios()
  }
  
  findAllAnuncios(){
    this._anuncioService.findAll()
    .subscribe(anuncios =>{
      this.anuncios = anuncios
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
