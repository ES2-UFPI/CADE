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
    this._anuncioService.saveLocal(an)
    this._router.navigate(['cad-anuncio']);
  }

  doRefresh(event) {
    this.findAnuncios()

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
