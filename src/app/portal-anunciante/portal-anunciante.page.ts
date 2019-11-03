import { Component, OnInit } from '@angular/core';
import { Anuncio } from '../anuncio';
import { AnuncioService } from '../anuncio.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-portal-anunciante',
  templateUrl: './portal-anunciante.page.html',
  styleUrls: ['./portal-anunciante.page.scss'],
})
export class PortalAnunciantePage implements OnInit {

  anuncios: Anuncio[] = []

  constructor(private _anuncioService: AnuncioService, private _router:Router) {}

  ngOnInit(){
    this.findAnuncios()
  }
  
  ionViewWillEnter(){
  }
  
  findAnuncios(){
    this._anuncioService.findAll()
    .subscribe(anuncios =>{
      this.anuncios = anuncios
    })
  }

  editar(an:Anuncio) {
    console.log(an)
    let navigationExtras: NavigationExtras = {
      state: {
        anuncio: an
      }
    };
    this._router.navigate(['cad-anuncio'], navigationExtras);
  }

  doRefresh(event) {
    this.findAnuncios()

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
