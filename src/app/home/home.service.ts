import { Injectable } from '@angular/core';
import { Anuncio } from '../anuncio';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  favoritos:Anuncio[]

  constructor(private _storage:Storage) {
    this._loadStorage()
  }

  public save(anuncios:Anuncio[]){
    this._saveLocal(anuncios)
    this._saveStorage()
  }
  
  public load(){
    return this._loadLocal()
  }

  private _saveLocal(anuncios:Anuncio[]){
    this.favoritos = anuncios
  }
  
  private _loadLocal():Anuncio[]{
    console.log(this.favoritos)
    return this.favoritos
  }

  private async _saveStorage(){
    this._storage.set('favoritos',this.favoritos)
  }
  
  private _loadStorage(){
    return from(this._storage.get('favoritos')).subscribe((obj:Anuncio[]) => {
      this.favoritos = obj ? obj : []
    })
  }
}
